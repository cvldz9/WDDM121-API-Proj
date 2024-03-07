import pointerPurpleIcon from "../assets/pointerPurpleIcon.svg";
import pointerWhiteIcon from "../assets/pointerWhiteIcon.svg";
import sunsetIcon from "../assets/sunsetIcon.svg";
import HomeNews from "../components/HomeNews";

import "./Home.css";
function Home({ isDarkMode, weatherData, newsData }) {
	function getCurrentTime() {
		const now = new Date();

		// Get day of the week
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const dayOfWeek = days[now.getDay()];

		// Get hours, minutes, and AM/PM
		let hours = now.getHours();
		const minutes = now.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours %= 12;
		hours = hours || 12; // Convert 0 to 12 for 12-hour format

		// Format the time
		const formattedTime = `${dayOfWeek} ${hours}:${
			minutes < 10 ? "0" + minutes : minutes
		} ${ampm}`;

		return formattedTime;
	}
	function convertEpochToTime(epoch) {
		// Create a new Date object with the epoch time
		const date = new Date(epoch * 1000);

		// Get hours, minutes, and AM/PM
		let hours = date.getHours();
		const minutes = date.getMinutes();
		const ampm = hours >= 12 ? "PM" : "AM";
		hours %= 12;
		hours = hours || 12; // Convert 0 to 12 for 12-hour format

		// Format the time
		const formattedTime = `${hours}:${
			minutes < 10 ? "0" + minutes : minutes
		} ${ampm}`;

		return formattedTime;
	}
	function getCurrentDate() {
		const now = new Date();

		// Format the date
		const options = {
			weekday: "long",
			month: "long",
			day: "2-digit",
			year: "numeric",
		};
		const formattedDate = now.toLocaleDateString("en-US", options);

		return formattedDate;
	}
	function convertEpochToDay(epoch) {
		// Create a new Date object with the epoch time
		const date = new Date(epoch * 1000);

		// Get the day of the week
		const days = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		];
		const dayOfWeek = days[date.getDay()];

		return dayOfWeek;
	}

	const currentTime = getCurrentTime();
	const currentDate = getCurrentDate();
	return (
		<>
			<div className="w-full flex mb-5">
				{/* main page left */}
				{weatherData && (
					<div className="w-full flex flex-col px-7 pt-9 overflow-y-auto">
						<div className="flex justify-between mb-3">
							<h3 className=" text-2xl">Hello, good morning</h3>
							<h6>{currentDate}</h6>
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
										{currentTime}
									</p>

									<div className="flex gap-1 mb-16 items-center text-2">
										<img
											className="text-p-white"
											src={pointerWhiteIcon}
											alt=""
										/>
										<h3>
											{
												weatherData?.timezone.split(
													"/"
												)[1]
											}
										</h3>
									</div>
									<p className="p-0 m-0 leading-[0.8] text-[9.7rem]">
										{weatherData?.current.temp}
									</p>
									<p className=" font-[500] text-[2.19rem]">
										{weatherData?.current.weather[0].main}
									</p>
									<div className="text-[0.75rem] font-bold flex gap-3">
										<div>
											L: {weatherData?.daily[0].temp.min}
										</div>
										<div>
											H: {weatherData?.daily[0].temp.max}
										</div>
										<div>
											Feels:{" "}
											{weatherData?.current.feels_like}
										</div>
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
									{/* summary */}
									{weatherData?.daily[0].summary}
								</p>
								{/* Alert */}
								<p>{weatherData?.alerts[0].description}</p>
								{/* <ul>
									<li>
										DressDress warmly and in layers to
										protect against the cold.
									</li>
									<li>
										Use appropriate footwear with good
										traction to prevent slips and falls.
									</li>
									<li>
										Roads may become slippery and hazardous,
										exercise caution while driving.
									</li>
								</ul> */}
							</div>
							<div className="flex flex-col items-center justify-between bg-p-grey min-w-[6.875rem] p-[1.1875rem]">
								<h3>Sunset</h3>
								<img
									className="w-6 h-6"
									src={sunsetIcon}
									alt=""
								/>
								<p className=" font-semibold text-sm">
									{convertEpochToTime(
										weatherData?.current.sunset
									)}
								</p>
							</div>
							<div className=" flex flex-col items-center gap-[0.3125rem] bg-p-grey min-w-[6.875rem] p-[1.1875rem]">
								<h3>Air Quality</h3>
								<h2 className="text-p-green text-[1.25rem]">
									1
								</h2>
								<p className=" font-semibold text-sm">
									Low Risk
								</p>
							</div>
							<div className=" flex flex-col items-center gap-[0.3125rem] bg-p-grey min-w-[6.875rem] p-[1.1875rem]">
								<h3>UV Index</h3>
								<h2 className="text-p-blue text-[1.25rem]">
									{weatherData?.current.uvi}
								</h2>
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
										{convertEpochToDay(
											weatherData?.daily[0].dt
										)}
									</h1>
									<img src={sunsetIcon} alt="" />
									<p className="text-[1.125rem]">
										{weatherData?.daily[0].temp.day}
									</p>
									<div className="w-full flex justify-between text-[0.75rem]">
										<div>
											L: {weatherData?.daily[0].temp.min}
										</div>
										<div>
											H: {weatherData?.daily[0].temp.max}
										</div>
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
				)}

				{/* main page right for the news display */}
				<HomeNews newsData={newsData} />
			</div>
		</>
	);
}

export default Home;
