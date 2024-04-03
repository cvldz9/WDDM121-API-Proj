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

console.log("firebase init");

// Define routes
app.get("/login", (req, res) => {
	res.send({ title: "Welcome to Upload!" });
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});
