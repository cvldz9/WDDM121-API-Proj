import React, { useState } from "react";

const AddDeveloperForm = () => {
	const [formData, setFormData] = useState({
		name: "",
		description: "",
		image: null,
	});

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

		const { name, description, image } = formData;
		const formDataToSend = new FormData();
		formDataToSend.append("name", name);
		formDataToSend.append("description", description);
		formDataToSend.append("image", image);

		try {
			const response = await fetch("/api/add-developer", {
				method: "POST",
				body: formDataToSend,
			});
			if (!response.ok) {
				throw new Error("Failed to submit developer details");
			}
			alert("Developer details submitted successfully!");
			setFormData({
				name: "",
				description: "",
				image: null,
			});
		} catch (error) {
			console.error("Error submitting developer details:", error);
			alert(error.message);
		}
	};

	return (
		<div>
			<h2>Add Developer</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Description:</label>
					<textarea
						name="description"
						value={formData.description}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label>Image:</label>
					<input
						type="file"
						accept="image/*"
						onChange={handleFileChange}
					/>
				</div>
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default AddDeveloperForm;
