import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contact.css";

function Contact({ isDarkMode }) {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const submitContact = async (email, password) => {
		setErrorMessage("");
		await fetch(`http://localhost:3000/api/contact`, {
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
					// save token in the local storage
					// localStorage.setItem("wapp", data.token);
					showSuccess();
				}
			})
			.catch((err) => {
				console.log("err", err);
				setErrorMessage(err.method);
			});
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		// Access form values from formData state
		console.log("Form data:", formData);
		// Call your login function or API here
		submitContact(formData);
	};
	const clearError = () => {
		setTimeout(() => {
			setErrorMessage("");
		}, 3000);
	};

	const showSuccess = () => {
		setTimeout(() => {
			setSuccessMessage("");
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				message: "",
			});
		}, 3000);
	};

	useEffect(() => {
		submitContact;
	}, []);
	return (
		<>
			<div className="flex flex-col items-center h-screen overflow-y-auto">
				<h3 className="text-center pb-8 pt-10 px-20 text-4xl self-center font-bold">
					Contact
				</h3>
				<div className="flex justify-center">
					<p className="contact-paragraph text-center">
						Reach out to us today and let's start a conversation.
						Whether you have questions, feedback, or simply want to
						say hello, we're here to listen and assist you. Get in
						touch and discover how we can collaborate to achieve
						your goals.
					</p>
				</div>

				<div className="isolate bg-white px-6 pb-4 sm:py-1 lg:px-8">
					<form className="mx-auto mt-5 max-w-xl border-p-grey p-5 rounded shadow-lg">
						{errorMessage && (
							<div className=" bg-p-tomato text-p-white p-3 w-full flex justify-center mb-5">
								{errorMessage}
							</div>
						)}
						{successMessage && (
							<div className=" bg-p-green text-p-white p-3 w-full flex justify-center mb-5">
								{successMessage}
							</div>
						)}
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									First name
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="firstName"
										id="first-name"
										value={formData.firstName}
										onChange={handleInputChange}
										autoComplete="given-name"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Last name
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="lastName"
										value={formData.lastName}
										onChange={handleInputChange}
										id="last-name"
										autoComplete="family-name"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							{/* <div className="sm:col-span-2">
                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">Company</label>
                <div className="mt-2.5">
                  <input type="text" name="company" id="company" autoComplete="organization" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
              </div> */}
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Email
								</label>
								<div className="mt-2.5">
									<input
										type="email"
										name="email"
										id="email"
										value={formData.email}
										onChange={handleInputChange}
										autoComplete="email"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							{/* <div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Phone number
								</label>
								<div className="relative mt-2.5">
									<div className="absolute inset-y-0 left-0 flex items-center">
										<label
											htmlFor="country"
											className="sr-only"
										>
											Country
										</label>
										<select
											id="country"
											name="country"
											className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
										>
											<option>US</option>
											<option>CA</option>
											<option>EU</option>
										</select>
										<svg
											className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fillRule="evenodd"
												d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
												clipRule="evenodd"
											/>
										</svg>
									</div>
									<input
										type="tel"
										name="phone-number"
										id="phone-number"
										autoComplete="tel"
										className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									/>
								</div>
							</div> */}
							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm font-semibold leading-6 text-gray-900"
								>
									Message
								</label>
								<div className="mt-2.5">
									<textarea
										name="message"
										id="message"
										value={formData.message}
										onChange={handleInputChange}
										rows="4"
										className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
									></textarea>
								</div>
							</div>
							{/* <div className="flex gap-x-4 sm:col-span-2">
								<div className="flex h-6 items-center">
									<button
										type="button"
										className="bg-gray-200 flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										role="switch"
										aria-checked="false"
										aria-labelledby="switch-1-label"
									>
										<span className="sr-only">
											Agree to policies
										</span>
										<span
											aria-hidden="true"
											className="translate-x-0 h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
										></span>
									</button>
								</div>
								<label
									className="text-sm leading-6 text-gray-600"
									id="switch-1-label"
								>
									By selecting this, you agree to our
									<a
										href="#"
										className="font-semibold text-indigo-600"
									>
										privacy&nbsp;policy
									</a>
									.
								</label>
							</div> */}
						</div>
						<div className="mt-10">
							<button
								onClick={handleSubmit}
								type="submit"
								className="block w-full rounded-md letstalk px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-transparent"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Contact;
