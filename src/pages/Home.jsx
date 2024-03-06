import pointerPurpleIcon from "../assets/pointerPurpleIcon.svg";
import pointerWhiteIcon from "../assets/pointerWhiteIcon.svg";
import sunsetIcon from "../assets/sunsetIcon.svg";
import HomeNews from "../components/HomeNews";

import "./Home.css";
function Home({ isDarkMode }) {
	return (
		<>
			<div className="w-full flex mb-5">
				{/* main page left */}
				<div className="w-full flex flex-col px-7 pt-9 overflow-y-auto">
					<div className="flex justify-between mb-3">
						<h3 className=" text-2xl">Hello, good morning</h3>
						<h6>February 06, 2024</h6>
					</div>
					{/* Search box */}
					<div className="flex justify-center mb-8">
						<form action="">
							<div className="flex justify-between gap-2 w-80 border border-p-grey rounded-full px-6 py-[0.625rem]">
								<input
									className=""
									type="text"
									placeholder="Find a city"
								/>
								<img src={pointerPurpleIcon} alt="" />
							</div>
						</form>
					</div>
					{/* main weather display */}
					<div className="main-weather-display-wrap flex justify-between p-6 mb-5 text-p-white">
						<div className=" m-7">
							<div className="flex flex-col">
								<p className="uppercase mb-4 text-[0.75rem]">
									Tuesday 11:05 AM
								</p>

								<div className="flex gap-1 mb-16 items-center text-2">
									<img
										className="text-p-white"
										src={pointerWhiteIcon}
										alt=""
									/>
									<h3>Toronto</h3>
								</div>
								<p className="p-0 m-0 leading-[0.8] text-[9.7rem]">
									-4
								</p>
								<p className=" font-[500] text-[2.19rem]">
									Snowing
								</p>
								<div className="flex gap-3">
									<div>L: -14</div>
									<div>H: -7</div>
									<div>Feels: -10</div>
								</div>
							</div>
						</div>
						<div className="flex flex-col w-72 gap-5">
							<div className=" bg-p-purple rounded-lg p-4">
								asfe
							</div>
							<div className=" bg-p-purple opacity-60 rounded-lg p-4">
								asfe
							</div>
						</div>
					</div>

					{/* Description area */}
					<section className="flex gap-2 text-[0.75rem] mb-[3rem]">
						<div className=" bg-p-grey grow p-[1.1875rem]">
							<p>
								Snowy conditions today, continuing through the
								night. Wind gusts are up to 7 km / h.
							</p>
							<ul>
								<li>
									DressDress warmly and in layers to protect
									against the cold.
								</li>
								<li>
									Use appropriate footwear with good traction
									to prevent slips and falls.
								</li>
								<li>
									Roads may become slippery and hazardous,
									exercise caution while driving.
								</li>
							</ul>
						</div>
						<div className="flex flex-col items-center justify-between bg-p-grey w-[6.875rem] p-[1.1875rem]">
							<h3>Sunset</h3>
							<img className="w-6 h-6" src={sunsetIcon} alt="" />
							<p className=" font-semibold text-sm">6:07 PM</p>
						</div>
						<div className=" flex flex-col items-center gap-[0.3125rem] bg-p-grey w-[6.875rem] p-[1.1875rem]">
							<h3>Air Quality</h3>
							<h2 className="text-p-green text-[1.25rem]">1</h2>
							<p className=" font-semibold text-sm">Low Risk</p>
						</div>
						<div className=" flex flex-col items-center gap-[0.3125rem] bg-p-grey w-[6.875rem] p-[1.1875rem]">
							<h3>UV Index</h3>
							<h2 className="text-p-blue text-[1.25rem]">0</h2>
							<p className=" font-semibold text-sm">Low</p>
						</div>
					</section>

					{/* Forecast */}
					<section>
						<h3 className="font-semibold text-[1.25rem] mb-5">
							Forecast
						</h3>
						<div className="w-full flex justify-between">
							<div className="p-6 gap-2 text-p-white bg-p-purple flex flex-col items-center rounded-lg">
								<h1 className="font-semibold text-sm">
									Wednesday
								</h1>
								<img src={sunsetIcon} alt="" />
								<p className="text-[1.125rem]">-8</p>
								<div className="w-full flex justify-between text-[0.75rem]">
									<div>L: -14</div>
									<div>H: -7</div>
								</div>
							</div>
							<div className="p-6 gap-2 text-p-white bg-p-purple flex flex-col items-center rounded-lg">
								<h1 className="font-semibold text-sm">
									Wednesday
								</h1>
								<img src={sunsetIcon} alt="" />
								<p className="text-[1.125rem]">-8</p>
								<div className="w-full flex justify-between text-[0.75rem]">
									<div>L: -14</div>
									<div>H: -7</div>
								</div>
							</div>
							<div className="p-6 gap-2 text-p-white bg-p-purple flex flex-col items-center rounded-lg">
								<h1 className="font-semibold text-sm">
									Wednesday
								</h1>
								<img src={sunsetIcon} alt="" />
								<p className="text-[1.125rem]">-8</p>
								<div className="w-full flex justify-between text-[0.75rem]">
									<div>L: -14</div>
									<div>H: -7</div>
								</div>
							</div>
							<div className="p-6 gap-2 text-p-white bg-p-purple flex flex-col items-center rounded-lg">
								<h1 className="font-semibold text-sm">
									Wednesday
								</h1>
								<img src={sunsetIcon} alt="" />
								<p className="text-[1.125rem]">-8</p>
								<div className="w-full flex justify-between text-[0.75rem]">
									<div>L: -14</div>
									<div>H: -7</div>
								</div>
							</div>
							<div className="p-6 gap-2 text-p-white bg-p-purple flex flex-col items-center rounded-lg">
								<h1 className="font-semibold text-sm">
									Wednesday
								</h1>
								<img src={sunsetIcon} alt="" />
								<p className="text-[1.125rem]">-8</p>
								<div className="w-full flex justify-between text-[0.75rem]">
									<div>L: -14</div>
									<div>H: -7</div>
								</div>
							</div>
							<div className="p-6 gap-2 text-p-white bg-p-purple flex flex-col items-center rounded-lg">
								<h1 className="font-semibold text-sm">
									Wednesday
								</h1>
								<img src={sunsetIcon} alt="" />
								<p className="text-[1.125rem]">-8</p>
								<div className="w-full flex justify-between text-[0.75rem]">
									<div>L: -14</div>
									<div>H: -7</div>
								</div>
							</div>
							<div className=" p-6 gap-2 text-p-white bg-p-purple flex flex-col items-center rounded-lg">
								<h1 className="font-semibold text-sm">
									Wednesday
								</h1>
								<img src={sunsetIcon} alt="" />
								<p className="text-[1.125rem]">-8</p>
								<div className="w-full flex justify-between text-[0.75rem]">
									<div>L: -14</div>
									<div>H: -7</div>
								</div>
							</div>
						</div>
					</section>
				</div>

				{/* main page right for the news display */}
				<HomeNews />
			</div>
		</>
	);
}

export default Home;
