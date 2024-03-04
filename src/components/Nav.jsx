import Logo from "../assets/logo.svg";
import HomeIcon from "../assets/homeIcon.svg";
import UsersIcon from "../assets/usersIcon.svg";
import PhoneIcon from "../assets/phoneIcon.svg";

function Nav({ isDarkMode }) {
	return (
		<>
			<div className="flex flex-col items-center justify-between text-p-white px-2 py-4 shadow-lg">
				<div className="">
					<div className="flex flex-col items-center h-56">
						<img src={Logo} alt="" />
					</div>

					<div className="flex flex-col items-center gap-16">
						<img src={HomeIcon} alt="" />
						<img src={UsersIcon} alt="" />
						<img src={PhoneIcon} alt="" />
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
