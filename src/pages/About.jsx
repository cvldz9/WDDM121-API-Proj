import "./About.css";
import GlobeImage from "../assets/globe.svg";
function About({ isDarkMode }) {
	return (
		<>
			<div className="flex flex-col items-center">
				<div className="flex flex-col">
					<h1 className=" uppercase">About Us</h1>
					<img className="w-[20rem]" src={GlobeImage} alt="" />
				</div>

			</div>
		</>
	);
}

export default About;
