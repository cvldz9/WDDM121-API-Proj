import Logo from "../assets/logo.svg";
import HomeIcon from "../assets/homeIcon.svg";
import UsersIcon from "../assets/usersIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
import LoginIcon from "../assets/icons8-login-50.png";
import SignupIcon from "../assets/icons8-add-user-48.png";
import FeturedAPI from "../assets/icons8-api-48.png";
import FcAbout from "../assets/icons8-about-50.png";
import "./Nav.css";

function Nav({ isDarkMode }) {
	return (
		<>
			<div className="flex flex-col items-center justify-between text-p-white px-2 py-4 shadow-lg">
				<div className="">
					<div className="flex flex-col items-center h-32">
						<a href="/">
							<img src={Logo} alt="" />
						</a>
					</div>

					<div className="flex flex-col items-center gap-12 link-wrap">
						<a href="/home" title="Home">
							<img src={HomeIcon} alt="" />
						</a>
						<a href="/about" title="Acout Us">
							{/* <FcAbout /> */}
							<img src={FcAbout} alt="" />
						</a>
						<a href="/developers" title="Developers">
							<img src={UsersIcon} alt="" />
						</a>

						<a href="/contact" title="Contact Us">
							<img src={PhoneIcon} alt="" />
						</a>

						<a href="/featured-api">
							<img src={FeturedAPI} alt="" />
						</a>

						<a href="/" title="Login">
							<img src={LoginIcon} alt="" />
						</a>

						<a href="/signup" title="Signup">
							<img src={SignupIcon} alt="" />
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
