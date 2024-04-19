import React, { useState } from "react";

const AddDeveloperForm = ({ devData }) => {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		image: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const clearError = () => {
		setTimeout(() => {
			setErrorMessage("");
		}, 3000);
	};

	const showSuccess = () => {
		setTimeout(() => {
			setSuccessMessage("");
			setFormData({
				name: "",
				description: "",
				image: "",
			});
		}, 3000);
	};
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleFileChange = (e) => {
		setFormData({
			...formData,
			image: e.target.files[0],
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setErrorMessage("");
		setSuccessMessage("");

		const { name, description, image } = formData;
		const formDataToSend = new FormData();
		console.log("formDataToSend", formDataToSend);
		formDataToSend.append("name", name);
		formDataToSend.append("description", description);
		formDataToSend.append("image", image);

		try {
			const response = await fetch(
				"http://localhost:3000/api/add-developer",
				{
					method: "POST",
					body: formDataToSend,
				}
			);
			if (!response.ok) {
				setErrorMessage("Error, Try again");
				throw new Error("Failed to submit developer details");
			}
			// alert("Developer details submitted successfully!");
			setFormData({
				name: "",
				description: "",
				image: "",
			});
			const dataRes = await response.json();
			// console.log("add dev resp", dataRes.data);
			devData(dataRes.data);
			setSuccessMessage(dataRes.message);
			showSuccess();
		} catch (error) {
			console.error("Error submitting developer details:", error);
			setErrorMessage(error.message);
			clearError();
		}
	};

	return (
		<>
			<h2 className="font-semibold text-xl">Add Developer</h2>
			<form
				className="mx-auto my-5 max-w-xl border-p-grey p-5 rounded shadow-lg"
				onSubmit={handleSubmit}
			>
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
				<div className="grid grid-cols-1 gap-x-8 gap-y-6">
					<div>
						<label className="block text-sm font-semibold leading-6 text-gray-900">
							Name:
						</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<div>
						<label className="block text-sm font-semibold leading-6 text-gray-900">
							Description:
						</label>
						<textarea
							name="description"
							value={formData.description}
							onChange={handleChange}
							required
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<div>
						<label className="block text-sm font-semibold leading-6 text-gray-900">
							Image:
						</label>
						<input
							type="file"
							accept="image/*"
							onChange={handleFileChange}
							readOnly
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<button
						className="block w-full rounded-md letstalk px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-transparent"
						type="submit"
					>
						Add Developer
					</button>
				</div>
			</form>
		</>
	);
};

export default AddDeveloperForm;
