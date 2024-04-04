import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function SignUp({ isDarkMode }) {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const navigate = useNavigate();

	// Function to handle input change
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const signupUser = async (email, password) => {
		setErrorMessage("");
		await fetch(`http://localhost:3000/api/signup`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData), // Send data in the body as JSON string
		})
			.then((res) => {
				return res.json(); // Add return statement here
			})
			.then((data) => {
				console.log("data", data.message);
				if (data.success === 0) {
					setErrorMessage(data.message);
					console.log("errorMessage", errorMessage);
					clearError();
				}
				if (data.success === 1) {
					setSuccessMessage(data.message);
					redirectToLogin();
				}
			})
			.catch((err) => {
				console.log("err", err);
				setErrorMessage(err.method);
			});
	};

	const clearError = () => {
		setTimeout(() => {
			setErrorMessage("");
		}, 3000);
	};

	const redirectToLogin = () => {
		setTimeout(() => {
			setErrorMessage("");
			navigate("/");
		}, 3000);
	};

	const handleSignup = (event) => {
		event.preventDefault();
		// Access form values from formData state
		console.log("Form data:", formData);
		// Call your login function or API here
		signupUser(formData);
	};

	useEffect(() => {
		signupUser;
	}, []);
	return (
		<>
			<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
				<div className="sm:mx-auto sm:w-full sm:max-w-sm">
					<img
						className="mx-auto h-10 w-auto"
						src={Logo}
						alt="Your Company"
					/>
					<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
						Create an account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6" action="" method="POST">
						{errorMessage && (
							<div className=" bg-p-tomato text-p-white p-3 w-full flex justify-center">
								{errorMessage}
							</div>
						)}
						{successMessage && (
							<div className=" bg-p-green text-p-white p-3 w-full flex justify-center">
								{successMessage}
							</div>
						)}
						{/* <div>
							<label
								htmlFor="firstName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								First Name
							</label>
							<div className="mt-2">
								<input
									id="firstName"
									name="firstName"
									type="text"
									autoComplete="given-name"
									required
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="lastName"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Last Name
							</label>
							<div className="mt-2">
								<input
									id="lastName"
									name="lastName"
									type="text"
									autoComplete="family-name"
									required
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div> */}

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Email address
							</label>
							<div className="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleInputChange}
									autoComplete="email"
									required
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<label
								htmlFor="password"
								className="block text-sm font-medium leading-6 text-gray-900"
							>
								Password
							</label>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									value={formData.password}
									onChange={handleInputChange}
									autoComplete="new-password"
									required
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								onClick={handleSignup}
								type="submit"
								className="block w-full rounded-md letstalk px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-transparent"
							>
								Sign Up
							</button>
						</div>
					</form>

					<div className="mt-6 border-t border-gray-200 pt-6">
						<p className="text-center text-sm text-gray-500">
							Already have an account?{" "}
							<Link
								to="/"
								className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
							>
								Sign In
							</Link>
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default SignUp;
