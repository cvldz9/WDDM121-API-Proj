import Logo from "../assets/logo.svg";
import HomeIcon from "../assets/homeIcon.svg";
import UsersIcon from "../assets/usersIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";
import LoginIcon from "../assets/icons8-login-50.png";
import SignupIcon from "../assets/icons8-add-user-48.png";
import FeturedAPI from "../assets/icons8-api-48.png";
import FcAbout from "../assets/icons8-about-50.png";
import LogoutIcon from "../assets/icons8-power-off-48.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Nav.css";

function Nav({ isDarkMode, isAuthenticated, userLogout }) {
	const navigate = useNavigate();
	// const [isAuthenticated, setIsAuthenticated] = useState(false);

	const handleLogout = () => {
		const token = localStorage.getItem("wapp");
		if (token != null && token != "") {
			localStorage.removeItem("wapp");
			// setIsAuthenticated(false);
			userLogout(true);
			navigate("/");
		}
	};

	// const handleCheckUserAuth = () => {
	// 	checkUserAuth(true);
	// };

	return (
		<>
			<div className="flex flex-col items-center justify-between text-p-white px-2 py-4 shadow-lg">
				<div className="">
					<div className="flex flex-col items-center h-32">
						<Link to="/">
							<img src={Logo} alt="" />
						</Link>
					</div>

					<div className="flex flex-col items-center gap-12 link-wrap">
						{isAuthenticated && (
							<Link to="/home" title="Home">
								<img src={HomeIcon} alt="" />
							</Link>
						)}
						<Link to="/about" title="Acout Us">
							{/* <FcAbout /> */}
							<img src={FcAbout} alt="" />
						</Link>
						<Link to="/developers" title="Developers">
							<img src={UsersIcon} alt="" />
						</Link>

						<Link to="/contact" title="Contact Us">
							<img src={PhoneIcon} alt="" />
						</Link>

						<Link to="/featured-api">
							<img src={FeturedAPI} alt="" />
						</Link>
						{!isAuthenticated && (
							<>
								<Link to="/" title="Login">
									<img src={LoginIcon} alt="" />
								</Link>

								<Link to="/signup" title="Signup">
									<img src={SignupIcon} alt="" />
								</Link>
							</>
						)}
						{isAuthenticated && (
							<img
								className=" cursor-pointer"
								onClick={handleLogout}
								src={LogoutIcon}
								alt=""
							/>
						)}
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
