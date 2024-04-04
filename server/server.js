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

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: "https://wddm121-50c69-default-rtdb.firebaseio.com",
});

// Firebase Auth instance
const auth = admin.auth();

console.log("auth...", auth);
// Define routes
app.post("/api/login", async (req, res) => {
	const { email, password } = req.body;
	console.log("body data", req.body);
	// authenticate
	try {
		// Authenticate user with Firebase Auth
		const userCredential = await auth.getUserByEmail(email);
		const user = userCredential.user;
		console.log("Successfully signed in:", user.uid);
		res.status(200).json({
			message: "Successfully signed in",
			uid: user.uid,
		});
	} catch (error) {
		console.error("Error signing in:", error);
		res.status(401).json({ message: "Unauthorized" });
	}
});

app.post("/api/signup", async (req, res) => {
	const { email, password } = req.body;
	console.log("body data", req.body);
	// signup
	try {
		// Signup user with Firebase Auth
		const userRecord = await auth.createUser({
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
