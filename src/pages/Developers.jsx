// import React, { useState, useEffect } from "react";
import "./Developers.css";
import AddDeveloperForm from "../components/AddDeveloperForm";
import { useState, useEffect } from "react";

function Developers({ isDarkMode, isAuthenticated }) {
	const [developers, setDevelopers] = useState([]);

	const arrayBufferToBase64 = (buffer) => {
		let binary = "";
		const bytes = new Uint8Array(buffer);
		const len = bytes.byteLength;
		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return window.btoa(binary);
	};

	const handleDevData = (data) => {
		const devs = data;
		// console.log("devs.....", devs);
		// console.log("before update", developers);
		if (devs) {
			setDevelopers(devs);
			// console.log("after update", developers);
		}
	};
	useEffect(() => {
		const fetchDevelopers = async () => {
			try {
				const response = await fetch(
					"http://localhost:3000/api/developers"
				);
				if (!response.ok) {
					throw new Error("Failed to fetch developers");
				}
				const data = await response.json();

				setDevelopers(data.developers);
			} catch (error) {
				console.error("Error fetching developers:", error);
			}
		};

		fetchDevelopers();
	}, []);

	return (
		<>
			<div className="flex flex-col items-center overflow-y-auto">
				<h3 className="text-center pb-8 pt-10 px-20 text-2xl self-center font-bold">
					Developers
				</h3>
				<div className="flex justify-center pb-8">
					<p className="sub-paragraph text-center">
						Explore this page to learn more about each member of our
						team. Discover their areas of expertise, passions, and
						contributions to our projects. Get to know the faces
						behind the code and see firsthand the dedication and
						passion that drive us forward. Join us on our journey as
						we collaborate, innovate, and create groundbreaking
						solutions together.
					</p>
				</div>

				{isAuthenticated && (
					<AddDeveloperForm devData={handleDevData} />
				)}

				<div className="grid gap-10 grid-cols-2 grid-rows-2">
					{developers?.map((developer) => (
						<div
							key={developer?.id}
							className="flex box-width rounded-lg shadow-md p-4"
						>
							{developer.images[0].mimetype ===
							"image/svg+xml" ? (
								<img
									className="img-width h-auto"
									src={`data:image/svg+xml;base64,${arrayBufferToBase64(
										developer.images[0].buffer
									)}`}
									alt={developer.name}
								/>
							) : (
								<img
									className="img-width h-auto"
									src={`data:image/*;base64,${arrayBufferToBase64(
										developer.images[0].buffer
									)}`}
									alt={developer.name}
								/>
							)}

							<div>
								<p className="m-4 font-semibold text-xl">
									{developer?.name}
								</p>
								<p className="m-4 font-normal text-s text-justify">
									{developer?.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

export default Developers;
