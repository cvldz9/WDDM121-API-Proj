import "./About.css";
import GlobeImage from "../assets/globe.svg";
function About({ isDarkMode }) {
	return (
		<>
			
			<div className="flex flex-col items-center">
                <h3 className="text-center pb-8 pt-10 px-20 text-2xl self-center font-bold">About</h3>
                    <div className="flex justify-center pb-8">
						<img className="w-[20rem]" src={GlobeImage} alt="" />

							<p className="sub-paragraph text-center">Text</p>
                    </div>
            </div>

		</>
	);
}

export default About;
