const express = require("express");
const { initializeApp } = require("firebase/app");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./wddm121-50c69-firebase-adminsdk-xmt0s-0c518b1adc.json");
const upload = multer();

const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());
// Use body-parser middleware to parse JSON
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded form data
// Use multer middleware to handle form data
app.use(upload.any());

// const firebaseConfig = {
// 	apiKey: "AIzaSyC2c9CvPxPHLw3ciHS7oNQRHf-XGhGMDqI",
// 	authDomain: "wddm121-50c69.firebaseapp.com",
// 	databaseURL: "https://wddm121-50c69-default-rtdb.firebaseio.com",
// 	projectId: "wddm121-50c69",
// 	storageBucket: "wddm121-50c69.appspot.com",
// 	messagingSenderId: "800322405328",
// 	appId: "1:800322405328:web:25a5ab4d05bfa3b0ceafd5",
// 	measurementId: "G-B9FL2B0PYQ",
// };

// // Initialize Firebase
// const appDB = initializeApp(firebaseConfig);
// const appAuth = appDB.auth();

//Authentication
//Init authentication from Firebase console
// const auth = firebaseApp.auth();

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://wddm121-50c69-default-rtdb.firebaseio.com",
});

// Firebase Auth instance
const adminAuth = admin.auth();

// console.log("auth...", auth);
// Define routes
app.post("/api/login", async (req, res) => {
	const { email, password } = req.body;
	console.log("body data", req.body);
	// authenticate
	try {
		// Perform login using Firebase Authentication
		const userCredential = await admin.auth().getUserByEmail(email);
		if (!userCredential) {
			return res.status(401).json({ error: "User not found" });
		}

		const uid = userCredential.uid;
		const token = await admin.auth().createCustomToken(uid); // This step is optional, used for generating custom tokens
		res.status(200).json({
			message: "Login successful",
			uid: uid,
			token,
			success: 1,
		});
		// 	message: "Login successful",
		// const userCredential = await appAuth.signInWithEmailAndPassword(
		// 	email,
		// 	password
		// );
		// console.log("userCredentials", userCredential);
		// const uid = userCredential.user.uid;

		// res.status(200).json({
		// 	message: "Login successful",
		// 	uid: uid,
		// });
	} catch (error) {
		console.error("Error logging in:", error);
		res.status(400).json({
			message: error.errorInfo.message,
			code: error.errorInfo.code,
			success: 0,
		});
	}
	// try {
	// 	// Authenticate user with Firebase Auth
	// 	const userCredential = await auth.getUserByEmail(email);
	// 	const user = userCredential.user;
	// 	console.log("Successfully signed in:", user.uid);
	// 	res.status(200).json({
	// 		message: "Successfully signed in",
	// 		uid: user.uid,
	// 	});
	// } catch (error) {
	// 	console.error("Error signing in:", error);
	// 	res.status(401).json({ message: "Unauthorized" });
	// }
});

app.post("/api/signup", async (req, res) => {
	const { email, password } = req.body;
	console.log("body data", req.body);
	// signup
	try {
		// Signup user with Firebase Auth
		const userRecord = await adminAuth.createUser({
			email,
			password,
		});

		// const user = userCredential.user;
		console.log("Successfully created user:", userRecord);
		res.status(200).json({
			message: "You have successfully registered",
			uid: userRecord.uid,
			success: 1,
		});
	} catch (error) {
		console.error("Error signing up:", error);
		res.status(400).json({
			message: error.errorInfo.message,
			code: error.errorInfo.code,
			success: 0,
		});
	}
});

app.post("/api/contact", async (req, res) => {
	// const { email, password } = req.body;
	console.log("body data", req.body);
	// authenticate
	try {
		// Perform login using Firebase Authentication
		const { firstName, lastName, email, message } = req.body;
		if (!firstName || !lastName || !email || !message) {
			return res.status(400).json({
				message: "All fields are required",
				success: 0,
			});
		}

		// Store contact information in Firebase Realtime Database
		const contactRef = admin.database().ref("contacts").push();
		await contactRef.set({
			firstName,
			lastName,
			email,
			message,
		});

		res.status(200).json({
			message: "Thank you for reaching out. We will get back to you soon",
			success: 1,
		});
	} catch (error) {
		console.error("Error logging in:", error);
		res.status(400).json({
			message: error.errorInfo.message,
			code: error.errorInfo.code,
			success: 0,
		});
	}
});

app.post("/api/add-developer", async (req, res) => {
	try {
		console.log("add dev", req.files);
		const images = req.files;
		const { name, description } = req.body;
		if (!name || !description || !images) {
			return res.status(400).json({
				message: "All fields are required",
				success: 0,
			});
		}

		// Store developer information in Firebase Realtime Database
		const developerRef = admin.database().ref("developers").push();
		await developerRef.set({
			name,
			description,
			images,
		});

		res.status(200).json({
			message: "Developer information stored successfully",
			success: 1,
		});
	} catch (error) {
		console.error("Error storing developer information:", error);
		res.status(500).json({
			message: "Failed to store developer information",
			success: 0,
		});
	}
});

app.get("/api/developers", async (req, res) => {
	try {
		// Retrieve all developers from Firebase Realtime Database
		const developersSnapshot = await admin
			.database()
			.ref("developers")
			.once("value");
		const developers = developersSnapshot.val();

		// Check if developers exist
		if (!developers) {
			return res.status(404).json({
				message: "No developers found",
				success: 0,
			});
		}

		// Convert developers object to an array
		const developersArray = Object.keys(developers).map((key) => ({
			id: key,
			...developers[key],
		}));

		res.status(200).json({
			developers: developersArray,
			success: 1,
		});
	} catch (error) {
		console.error("Error retrieving developers:", error);
		res.status(500).json({
			message: "Failed to retrieve developers",
			success: 0,
		});
	}
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
