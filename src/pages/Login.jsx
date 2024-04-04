import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useEffect, useState } from "react";

function Login({ isDarkMode }) {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	// Function to handle input change
	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	// get user filled details and call the backend endpoint to login the user in
	const loginUser = async (email, password) => {
		try {
			const response = await fetch("http://localhost:3000/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData), // Send data in the body as JSON string
			});
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			console.log("data", data);
			// Do something with the response data
		} catch (error) {
			console.error(
				"There was a problem with the fetch operation:",
				error
			);
		}
	};

	const handleLogin = (event) => {
		event.preventDefault();
		// Access form values from formData state
		console.log("Form data:", formData);
		// Call your login function or API here
		loginUser(formData);
	};

	useEffect(() => {
		loginUser;
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
						Sign in to your account
					</h2>
				</div>

				<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
					<form className="space-y-6">
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
									autoComplete="email"
									value={formData.email}
									onChange={handleInputChange}
									required
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<div className="flex items-center justify-between">
								<label
									htmlFor="password"
									className="block text-sm font-medium leading-6 text-gray-900"
								>
									Password
								</label>
								<div className="text-sm">
									<a
										href="#"
										className="font-semibold text-indigo-600 hover:text-indigo-500"
									>
										Forgot password?
									</a>
								</div>
							</div>
							<div className="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									value={formData.password}
									onChange={handleInputChange}
									autoComplete="current-password"
									required
									className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						<div>
							<button
								onClick={handleLogin}
								type="submit"
								className="block w-full rounded-md letstalk px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-transparent"
							>
								Sign in
							</button>
						</div>
						<br />
						<div className="text-center">
							<p>New to our platform?</p>
						</div>
						<Link
							to="/signup"
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							Sign Up
						</Link>
					</form>
				</div>
			</div>
		</>
	);
}

export default Login;
