import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { useState } from "react";
function App() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	return (
		<>
			<div className="flex bg-p-green">
				<div className="flex w-[3.75rem]">hello</div>
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
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
