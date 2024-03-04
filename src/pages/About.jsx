import "./About.css";
function About({ isDarkMode }) {
	return (
		<>
			<div className="about-wrap bg-[#444444] flex flex-col items-center gap-[4.375rem] p-10 w-full">
				<div className="flex flex-col">
					<h3 className=" text-p-tomato">Header</h3>
					<p>this is sentence</p>
				</div>
				<div>Box 2</div>
				<div>Box 3</div>
			</div>
		</>
	);
}

export default About;
