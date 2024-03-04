import pointerIcon from "../assets/pointerIcon.svg";
import "./Home.css";
function Home({ isDarkMode }) {
	return (
		<>
			<div className="w-full flex ">
				{/* main page left */}
				<div className="w-full flex flex-col px-7 pt-9">
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
								<img src={pointerIcon} alt="" />
							</div>
						</form>
					</div>
					{/* main weather display */}
					<div className="main-weather-display-wrap flex justify-between p-6 text-p-white">
						<div className=" m-7">
							<div className="flex flex-col">
								<h3>Tuesday 11:05 AM</h3>
								<h3> Toronto</h3>
								<h2 className=" text-[9.7rem]">-4</h2>
								<h3>Snowing</h3>
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
				</div>

				{/* main page right for the news display */}
				<div className="flex flex-col gap-2 w-[27.313rem] h-dvh bg-p-grey">
					<div>ksdjf</div>
				</div>
			</div>
		</>
	);
}

export default Home;
