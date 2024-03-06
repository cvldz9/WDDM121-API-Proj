import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
import Nav from "./components/Nav";
import FeaturedApi from "./pages/FeaturedApi";
import Developers from "./pages/Developers";
import Contact from "./pages/Contact";
import News from "./pages/News";
function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
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
