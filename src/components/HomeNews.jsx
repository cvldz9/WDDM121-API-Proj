import React from "react";
import newsImage from "../assets/newsImage.svg";
function HomeNews({ newsData }) {
	return (
		<>
			<div className="flex flex-col gap-2 w-[27.313rem] px-3 py-4 overflow-y-auto h-dvh bg-p-grey">
				{/* Breaking News */}
				{newsData == null ? "" : newsData}
				{!newsData && "Loading News Data"}

				{newsData && (
					<div className="flex rounded-md bg-p-white p-3">
						<div className="flex flex-col w-full">
							<h3 className=" bg-p-red rounded-sm py-2 px-5 mb-4 w-full text-p-white text-[0.875rem]">
								Breaking News!!!
							</h3>
							<div className="flex gap-4">
								<img
									className="rounded-md w-28"
									src={newsData?.data[0]?.image_url}
									alt=""
								/>
								<div className="flex flex-col justify-between">
									<a
										href={newsData?.data[0]?.url}
										target="_blank"
									>
										<p className="text-[0.75rem]">
											{newsData?.data[0]?.title}
										</p>
									</a>

									<h6 className="text-[0.75rem] text-p-black opacity-50">
										just now
									</h6>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Weather News */}
				{newsData && (
					<div className="flex flex-col rounded-md bg-p-white p-3">
						<h3 className=" rounded-sm py-1 mb-1 w-full text-p-black text-[0.875rem]">
							Weather News
						</h3>
						<div className="flex flex-col gap-3">
							<div className=" bg-p-grey gap-5 p-1 flex flex-col w-full">
								<div className="flex gap-4">
									<img
										className="rounded-md w-28"
										src={newsData?.data[0]?.image_url}
										alt=""
									/>
									<div className="flex flex-col justify-between">
										<a
											href={newsData?.data[0]?.url}
											target="_blank"
										>
											<p className="text-[0.75rem]">
												{newsData?.data[0]?.title}
											</p>
										</a>
										<h6 className="text-[0.75rem] text-p-black opacity-50">
											just now
										</h6>
									</div>
								</div>
							</div>

							<div className=" bg-p-grey gap-5 p-1 flex flex-col w-full">
								<div className="flex gap-4">
									<img
										className="rounded-md w-28"
										src={newsData?.data[1]?.image_url}
										alt=""
									/>
									<div className="flex flex-col justify-between">
										<a
											href={newsData?.data[1]?.url}
											target="_blank"
										>
											<p className="text-[0.75rem]">
												{newsData?.data[1]?.title}
											</p>
										</a>
										<h6 className="text-[0.75rem] text-p-black opacity-50">
											just now
										</h6>
									</div>
								</div>
							</div>

							<div className=" bg-p-grey gap-5 p-1 flex flex-col w-full">
								<div className="flex gap-4">
									<img
										className="rounded-md w-28"
										src={newsData?.data[2]?.image_url}
										alt=""
									/>
									<div className="flex flex-col justify-between">
										<a
											href={newsData?.data[2]?.url}
											target="_blank"
										>
											<p className="text-[0.75rem]">
												{newsData?.data[2]?.title}
											</p>
										</a>
										<h6 className="text-[0.75rem] text-p-black opacity-50">
											just now
										</h6>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
				{/* Traffic Update */}
				<div className="flex flex-col rounded-md bg-p-white p-3">
					<h3 className=" rounded-sm py-1 mb-1 w-full text-p-black text-[0.875rem]">
						Traffic Update
					</h3>
					<div className="flex flex-col gap-3">
						<div className=" bg-p-grey gap-5 p-1 flex flex-col w-full">
							<div className="flex gap-4">
								<img
									className="rounded-md w-28"
									src={newsImage}
									alt=""
								/>
								<div className="flex flex-col justify-between">
									<p className="text-[0.75rem]">
										Canada: New Reforms for International
										Students Starting 2024
									</p>
									<h6 className="text-[0.75rem] text-p-black opacity-50">
										just now
									</h6>
								</div>
							</div>
						</div>

						{/* <div className=" bg-p-grey gap-5 p-1 flex flex-col w-full">
							<div className="flex gap-4">
								<img
									className="rounded-md w-28"
									src={newsImage}
									alt=""
								/>
								<div className="flex flex-col justify-between">
									<p className="text-[0.75rem]">
										Canada: New Reforms for International
										Students Starting 2024
									</p>
									<h6 className="text-[0.75rem] text-p-black opacity-50">
										just now
									</h6>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</>
	);
}

export default HomeNews;
