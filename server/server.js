const express = require("express");
const { initializeApp } = require("firebase/app");

const app = express();
const PORT = 3000;

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyC2c9CvPxPHLw3ciHS7oNQRHf-XGhGMDqI",
	authDomain: "wddm121-50c69.firebaseapp.com",
	databaseURL: "https://wddm121-50c69-default-rtdb.firebaseio.com",
	projectId: "wddm121-50c69",
	storageBucket: "wddm121-50c69.appspot.com",
	messagingSenderId: "800322405328",
	appId: "1:800322405328:web:25a5ab4d05bfa3b0ceafd5",
	measurementId: "G-B9FL2B0PYQ",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

//Authentication
//Init authentication from Firebase console
// const auth = firebase.auth();

// const signUp = (email, password) => {
// 	//Allow us to sign up
// 	// const email = document.getElementById("email").value;
// 	// const password = document.getElementById("password").value;
// 	console.log(email, password);

// 	firebase
// 		.auth()
// 		.createUserWithEmailAndPassword(email, password)
// 		.then((result) => {
// 			//If successfully created user
// 			document.write("You are Signed Up");
// 			console.log(result);
// 		})
// 		.catch((error) => {
// 			//If unsuccessfully created user
// 			console.log(error.code);
// 			console.log(error.message);
// 		});
// };

// const signIn = (email, password) => {
// 	//Allow us to sign in
// 	const email = req.body.email;
// 	const password = req.body.password;
// 	firebase
// 		.auth()
// 		.signInWithEmailAndPassword(email, password)
// 		.then((result) => {
// 			//Signed IN
// 			document.write("You are Signed In");
// 			console.log(result);
// 		})
// 		.catch((error) => {
// 			console.log(error.code);
// 			console.log(error.message);
// 		});
// };

// Define routes
app.post("/login", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	// authenticate
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((result) => {
			//Signed IN
			document.write("You are Signed In");
			console.log(result);
			res.status(200).send({ code: 200, message: result });
		})
		.catch((error) => {
			console.log(error.code);
			console.log(error.message);
			res.status(400).send({ code: error.code, message: error.message });
		});
});

app.post("/signup", (req, res) => {
	const email = req.body.email;
	const password = req.body.password;

	// authenticate add the user
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((result) => {
			//If successfully created user
			document.write("You are Signed Up");
			console.log(result);
			res.status(200).send({ code: 200, message: result });
		})
		.catch((error) => {
			//If unsuccessfully created user
			console.log(error.code);
			console.log(error.message);
			res.status(400).send({ code: error.code, message: error.message });
		});
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
