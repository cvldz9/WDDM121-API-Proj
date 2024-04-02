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

function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [weatherData, setWeatherData] = useState(null);
	// const [city, setWeatherData] = useState({});
	const [newsData, setNewsData] = useState(null);

	const newsDataFile = {
		meta: {
			found: 253,
			returned: 3,
			limit: 3,
			page: 1,
		},
		data: [
			{
				uuid: "399ab887-df82-420e-8210-e50649b89a3e",
				title: "2022 IndyCar at Toronto: How to watch, stream, preview, teams to watch in the Honda Indy Toronto Grand Prix",
				description:
					"Team Penske aims to continue their roll as off-track controversy swirls around at Chip Ganassi Racing, Arrow McLaren SP and Andretti Autosport",
				keywords: "",
				snippet:
					"The beginning of July marked Formula 1's return to Canada, and this weekend the IndyCar Series gets its chance along the streets of downtown Toronto. COVID-19 w...",
				url: "https://www.cbssports.com/motor-sports/news/2022-indycar-at-toronto-how-to-watch-stream-preview-teams-to-watch-in-the-honda-indy-toronto-grand-prix/",
				image_url:
					"https://sportshub.cbsistatic.com/i/r/2022/07/14/b11641e6-4520-40be-82d6-dfc2f9a2f2e2/thumbnail/1200x675/fe963de94129f82f8f55974e44503b92/scott-mclaughlin-usatsi.jpg",
				language: "en",
				published_at: "2022-07-14T21:39:26.000000Z",
				source: "cbssports.com",
				categories: ["sports"],
				relevance_score: 21.522888,
				locale: "us",
			},
			{
				uuid: "827f69ef-143b-41b0-af1b-2d789a1c6eae",
				title: "Airline issue weather waivers as winter storm moves through the country",
				description:
					"Tuesday's winter weather was having a fairly limited impact on flights, but airlines were providing travelers options to change their itineraries.",
				keywords: "",
				snippet:
					"Airline issue weather waivers as winter storm moves through the country\n\nShow Caption Hide Caption Winter storms reach US East and West Coasts Winter storms are...",
				url: "https://www.usatoday.com/story/travel/airline-news/2023/02/28/airline-weather-waivers/11363932002/",
				image_url:
					"https://www.gannett-cdn.com/presto/2023/02/28/USAT/55cdddaa-340c-45e1-9f9f-02b91abefb40-AP_Winter_Storm_Utah.jpg?auto=webp&crop=6271,3527,x14,y0&format=pjpg&width=1200",
				language: "en",
				published_at: "2023-02-28T15:49:46.000000Z",
				source: "usatoday.com",
				categories: ["travel"],
				relevance_score: 20.758945,
				locale: "us",
			},
			{
				uuid: "65b9f63a-a445-4178-9127-11b9dbbeb332",
				title: "Toronto anti-capitalist 'pay what you can' café closes after year in business",
				description:
					'A self-described "anti-capitalist" café and coffee shop in Canada named The Anarchist with a "pay what you can" business model will close at the end of the mon...',
				keywords:
					"News, canada, capitalism, coffee shops, radical, toronto",
				snippet:
					"A self-described “anti-capitalist” café and coffee shop in Canada named The Anarchist with a “pay what you can” business model will close at the end of...",
				url: "https://nypost.com/2023/05/16/toronto-anti-capitalist-pay-what-you-can-cafe-closes-after-year-in-business/",
				image_url:
					"https://nypost.com/wp-content/uploads/sites/2/2023/05/Screen-Shot-2023-05-16-at-123958-AM-copy.jpg?quality=75&strip=all&w=1024",
				language: "en",
				published_at: "2023-05-16T06:01:11.000000Z",
				source: "nypost.com",
				categories: ["general"],
				relevance_score: 20.342953,
				locale: "us",
			},
		],
	};

	const weatherDataFile = {
		lat: 33.44,
		lon: -94.04,
		timezone: "America/Chicago",
		timezone_offset: -18000,
		current: {
			dt: 1684929490,
			sunrise: 1684926645,
			sunset: 1684977332,
			temp: 292.55,
			feels_like: 292.87,
			pressure: 1014,
			humidity: 89,
			dew_point: 290.69,
			uvi: 0.16,
			clouds: 53,
			visibility: 10000,
			wind_speed: 3.13,
			wind_deg: 93,
			wind_gust: 6.71,
			weather: [
				{
					id: 803,
					main: "Clouds",
					description: "broken clouds",
					icon: "04d",
				},
			],
		},
		minutely: [
			{
				dt: 1684929540,
				precipitation: 0,
			},
		],
		hourly: [
			{
				dt: 1684926000,
				temp: 292.01,
				feels_like: 292.33,
				pressure: 1014,
				humidity: 91,
				dew_point: 290.51,
				uvi: 0,
				clouds: 54,
				visibility: 10000,
				wind_speed: 2.58,
				wind_deg: 86,
				wind_gust: 5.88,
				weather: [
					{
						id: 803,
						main: "Clouds",
						description: "broken clouds",
						icon: "04n",
					},
				],
				pop: 0.15,
			},
		],
		daily: [
			{
				dt: 1684951200,
				sunrise: 1684926645,
				sunset: 1684977332,
				moonrise: 1684941060,
				moonset: 1684905480,
				moon_phase: 0.16,
				summary: "Expect a day of partly cloudy with rain",
				temp: {
					day: 299.03,
					min: 290.69,
					max: 300.35,
					night: 291.45,
					eve: 297.51,
					morn: 292.55,
				},
				feels_like: {
					day: 299.21,
					night: 291.37,
					eve: 297.86,
					morn: 292.87,
				},
				pressure: 1016,
				humidity: 59,
				dew_point: 290.48,
				wind_speed: 3.98,
				wind_deg: 76,
				wind_gust: 8.92,
				weather: [
					{
						id: 500,
						main: "Rain",
						description: "light rain",
						icon: "10d",
					},
				],
				clouds: 92,
				pop: 0.47,
				rain: 0.15,
				uvi: 9.23,
			},
		],
		alerts: [
			{
				sender_name:
					"NWS Philadelphia - Mount Holly (New Jersey, Delaware, Southeastern Pennsylvania)",
				event: "Small Craft Advisory",
				start: 1684952747,
				end: 1684988747,
				description:
					"...SMALL CRAFT ADVISORY REMAINS IN EFFECT FROM 5 PM THIS\nAFTERNOON TO 3 AM EST FRIDAY...\n* WHAT...North winds 15 to 20 kt with gusts up to 25 kt and seas\n3 to 5 ft expected.\n* WHERE...Coastal waters from Little Egg Inlet to Great Egg\nInlet NJ out 20 nm, Coastal waters from Great Egg Inlet to\nCape May NJ out 20 nm and Coastal waters from Manasquan Inlet\nto Little Egg Inlet NJ out 20 nm.\n* WHEN...From 5 PM this afternoon to 3 AM EST Friday.\n* IMPACTS...Conditions will be hazardous to small craft.",
				tags: [],
			},
		],
	};

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

				getNewsDetails("weather", weatherData?.timezone?.split("/")[1]);
			})
			.catch((err) => {
				console.log("err", err);
			});
	};

	const getNewsDetails = async (search, city) => {
		await fetch(
			`https://api.thenewsapi.com/v1/news/top?search=${city}&api_token=of4Rz5znSeYCy0vW6rgfpbU8M0qo8MDYTvaQhNyc&locale=us&limit=10`
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
				console.log();
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
				<aside className="flex w-[3.75rem] bg-p-black">
					<Nav isDarkMode={isDarkMode}></Nav>
				</aside>
				<main className="flex w-full h-dvh">
					<Routes>
						<Route
							path="/"
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

						<Route
							path="/test"
							element={<News isDarkMode={isDarkMode} />}
						/>

						<Route
							path="/login"
							element={<Login isDarkMode={isDarkMode} />}
						/>
						
					</Routes>
				</main>
			</div>
		</>
	);
}

export default App;
