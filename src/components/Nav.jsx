import Logo from "../assets/logo.svg";
import HomeIcon from "../assets/homeIcon.svg";
import UsersIcon from "../assets/usersIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
import AboutIcon from "../assets/icons8-about (1).svg";
import FeturedAPI from "../assets/icons8-api-30.png";
import { FcAbout } from "react-icons/fc";

function Nav({ isDarkMode }) {
	return (
		<>
			<div className="flex flex-col items-center justify-between text-p-white px-2 py-4 shadow-lg">
				<div className="">
					<div className="flex flex-col items-center h-56">
						<a href="/">
							<img src={Logo} alt="" />
						</a>
					</div>

					<div className="flex flex-col items-center gap-12">
						<a href="/home">
							<img src={HomeIcon} alt="" />
						</a>
						<a href="/about">
							<FcAbout />
							{/* <img src={AboutIcon} alt="" /> */}
						</a>
						<a href="/developers">
							<img src={UsersIcon} alt="" />
						</a>

						<a href="/contact">
							<img src={PhoneIcon} alt="" />
						</a>

						<a href="/" title="Login">
							<img src={FeturedAPI} alt="" />
						</a>

						<a href="/signup" title="Signup">
							<img src={FeturedAPI} alt="" />
						</a>
						<a href="/featured-api">
							<img src={FeturedAPI} alt="" />
						</a>
					</div>
				</div>
				<div className="flex justify-center mb-4">
					<p>v1.0</p>
				</div>
			</div>
		</>
	);
}

export default Nav;
