const express = require("express");
const { initializeApp } = require("firebase/app");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");
const serviceAccount = require("./wddm121-50c69-firebase-adminsdk-xmt0s-0c518b1adc.json");

const app = express();
const PORT = 3000;

// Use CORS middleware
app.use(cors());
// Use body-parser middleware to parse JSON
app.use(bodyParser.json());

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
	// authenticate add the user
	// firebaseAuth
	// 	.auth()
	// 	.createUserWithEmailAndPassword(email, password)
	// 	.then((result) => {
	// 		//If successfully created user
	// 		document.write("You are Signed Up");
	// 		console.log(result);
	// 		res.status(200).send({ code: 200, message: result });
	// 	})
	// 	.catch((error) => {
	// 		//If unsuccessfully created user
	// 		console.log(error.code);
	// 		console.log(error.message);
	// 		res.status(400).send({ code: error.code, message: error.message });
	// 	});
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
