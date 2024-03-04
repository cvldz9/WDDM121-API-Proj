import "./About.css";
import GlobeImage from "../assets/globe.svg";
function About({ isDarkMode }) {
	return (
		<>
			<div className="about-wrap flex flex-col items-center justify-center gap-[4.375rem] p-10 w-full">
				<div className="flex flex-col">
					<h3 className=" uppercase">About Us</h3>
					<img className="w-[20rem]" src={GlobeImage} alt="" />
				</div>
				<div>Box 2</div>
				<div>Box 3</div>
				<div>Box 4</div>
			</div>
		</>
	);
}

export default About;
