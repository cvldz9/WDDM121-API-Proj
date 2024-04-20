import React, { useState, useEffect } from "react";
import { baseURL } from "../config/api";

const AddDeveloperForm = ({ editDev, devData }) => {
	const [formData, setFormData] = useState({
		id: "",
		name: "",
		description: "",
		image: "",
	});
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	useEffect(() => {
		if (editDev) {
			setFormData({
				id: editDev.id,
				name: editDev.name,
				description: editDev.description,
				image: "", // Assuming that we don't display the existing image in the form for editing
			});
		}
	}, [editDev]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleFileChange = (e) => {
		setFormData({ ...formData, image: e.target.files[0] });
	};

	const clearMessages = () => {
		setErrorMessage("");
		setSuccessMessage("");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		clearMessages();

		const formDataToSend = new FormData();
		Object.entries(formData).forEach(([key, value]) =>
			formDataToSend.append(key, value)
		);

		const url = editDev ? `developers/${editDev.id}` : "add-developer";
		const method = editDev ? "PUT" : "POST";

		try {
			const response = await fetch(`${baseURL}/${url}`, {
				method,
				body: formDataToSend,
			});

			if (!response.ok) {
				throw new Error("Failed to submit developer details");
			}

			const dataRes = await response.json();
			console.log("dataRes", dataRes);
			devData(dataRes.data);
			setSuccessMessage(dataRes.message);
			// Clear form data after successful submission
			if (!editDev) {
				setFormData({ id: "", name: "", description: "", image: "" });
			}
		} catch (error) {
			console.error("Error submitting developer details:", error);
			setErrorMessage("Error, Try again");
		}
	};

	return (
		<>
			<h2 className="font-semibold text-xl">
				{editDev ? "Edit" : "Add"} Developer
			</h2>
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
							required
							className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<button
						className="block w-full rounded-md letstalk px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 focus-visible:border-transparent"
						type="submit"
					>
						{editDev ? "Edit Developer" : "Add Developer"}
					</button>
				</div>
			</form>
		</>
	);
};

export default AddDeveloperForm;
