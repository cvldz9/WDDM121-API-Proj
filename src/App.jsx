import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
import Nav from "./components/Nav";
import FeaturedApi from "./pages/FeaturedApi";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	return (
		<>
			<div className="flex bg-p-white h-dvh">
				<div className="flex w-[3.75rem] bg-p-black">
					<Nav isDarkMode={isDarkMode}></Nav>
				</div>
				<div className="flex">
					<Routes>
						<Route
							path="/"
							element={<Home isDarkMode={isDarkMode} />}
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
							path="/featured-api"
							element={<Developers isDarkMode={isDarkMode} />}
						/>

						<Route
							path="/featured-api"
							element={<Contact isDarkMode={isDarkMode} />}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
