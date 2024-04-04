import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import FeaturedApi from "./pages/FeaturedApi";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [weatherData, setWeatherData] = useState(null);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [newsData, setNewsData] = useState(null);

	const userCurrentLocation = async () => {
		// Check if geolocation is supported by the browser
		if ("geolocation" in navigator) {
			// Get the current position
			navigator.geolocation.getCurrentPosition(
				async function (position) {
					console.log("position", position);
					// Extract latitude and longitude from the position object
					const latitude = position.coords.latitude;
					const longitude = position.coords.longitude;

					//call the weather api to the weather details for that location
					await getWeatherDetails(latitude, longitude);

					// get the city
					// if (weatherDataRes != null || weatherDataRes != undefined) {
					// 	const { timezone } = weatherDataRes;
					// }

					// Print or use latitude and longitude as needed
					console.log("Latitude:", latitude);
					console.log("Longitude:", longitude);
				},
				function (error) {
					// Handle errors
					switch (error.code) {
						case error.PERMISSION_DENIED:
							console.error(
								"User denied the request for Geolocation."
							);
							break;
						case error.POSITION_UNAVAILABLE:
							console.error(
								"Location information is unavailable."
							);
							break;
						case error.TIMEOUT:
							console.error(
								"The request to get user location timed out."
							);
							break;
						case error.UNKNOWN_ERROR:
							console.error("An unknown error occurred.");
							break;
					}
				}
			);
		} else {
			console.error("Geolocation is not supported by this browser.");
		}
	};

	const getWeatherDetails = async (lat, lon) => {
		await fetch(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=0ce47a12ed37953b3ce62625a1bb4c03`
			// `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=b371a830adebb46050765c8560fc2b85`
		)
			.then((res) => {
				return res.json(); // Add return statement here
			})
			.then((data) => {
				console.log("data", data);
				// const { timezone } = data;
				setWeatherData(data);
				console.log("data timezone", weatherData?.timezone);

				// getNewsDetails("weather", weatherData?.timezone?.split("/")[1]);
			})
			.catch((err) => {
				console.log("err", err);
			});
	};

	const getNewsDetails = async (search, city) => {
		await fetch(
			`https://api.thenewsapi.com/v1/news/top?search=${city}&api_token=qf6Ug8BBzLDHB79j4UbluPy6QOEXVHM3dUR5rfv3&locale=us&limit=10`
		)
			.then((res) => {
				return res.json(); // Add return statement here
			})
			.then((data) => {
				console.log("news data", data);
				// const { timezone } = data;
				setNewsData(data);
				console.log("data news", newsData);
			})
			.catch((err) => {
				console.log("err", err);
			});
	};

	const handleSearchByCity = async (city) => {
		console.log("search city in App", city);
		// call the
		getCoordinates(city);

		//getWeatherDetails();
	};

	function getCoordinates(cityName) {
		// Construct the URL for the Geocoding API request
		const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
			cityName
		)}&key=AIzaSyDF2K4MVXawaKO0IQONBA5Jc04mBIfbdxE`;

		// Send a GET request to the Geocoding API
		fetch(apiUrl)
			.then((response) => response.json())
			.then((data) => {
				// Check if the response contains results
				if (data.results.length > 0) {
					// Extract latitude and longitude from the first result
					const { lat, lng } = data.results[0].geometry.location;
					console.log(`Latitude: ${lat}, Longitude: ${lng}`);
					getWeatherDetails(lat, lng);
					// return { lat: lat, lon: lng };
				} else {
					console.error("No results found for the specified city.");
				}
			})
			.catch((error) => {
				console.error("Error fetching coordinates:", error);
			});
	}

	useEffect(() => {
		userCurrentLocation();
		// getNewsDetails("weather", "city");
	}, []);
	// getWeatherDetails();
	return (
		<>
			<div className="flex w-screen bg-p-white h-screen">
				<aside className="flex w-[3.75rem] h-full bg-p-black">
					<Nav isDarkMode={isDarkMode}></Nav>
				</aside>
				<main className="flex w-full h-dvh">
					<Routes>
						<Route
							path="/"
							element={<Login isDarkMode={isDarkMode} />}
						/>

						<Route
							path="/signup"
							element={<Signup isDarkMode={isDarkMode} />}
						/>
						<Route
							path="/home"
							element={
								<Home
									weatherData={weatherData}
									newsData={newsData}
									isDarkMode={isDarkMode}
									searchByCity={handleSearchByCity}
								/>
							}
						/>

						<Route
							path="/about"
							element={<About isDarkMode={isDarkMode} />}
						/>

						<Route
							path="/featured-api"
							element={<FeaturedApi isDarkMode={isDarkMode} />}
						/>

						<Route
							path="/developers"
							element={<Developers isDarkMode={isDarkMode} />}
						/>

						<Route
							path="/contact"
							element={<Contact isDarkMode={isDarkMode} />}
						/>

						<Route
							path="/news"
							element={<News isDarkMode={isDarkMode} />}
						/>
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
