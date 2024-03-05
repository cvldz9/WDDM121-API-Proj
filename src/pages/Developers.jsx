import "./Developers.css";

function Developers({ isDarkMode }) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-center pb-8 pt-10 px-20 text-2xl self-center">Developers</h3>
      <div className="flex justify-center pb-8 ">
        <p className="sub-paragraph text-center">Explore this page to learn more about each member of our team. Discover their areas of expertise, passions, and contributions to our projects. Get to know the faces behind the code and see firsthand the dedication and passion that drive us forward. Join us on our journey as we collaborate, innovate, and create groundbreaking solutions together.</p>
      </div>
	  <div className="grid gap-4 grid-cols-2 grid-rows-2">
          <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4">
            Joseph Moses
          </div>
          <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4">
            Joseph Moses
          </div>
          <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4">
            Joseph Moses
          </div>
          <div className="w-64 h-64 bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4">
            Joseph Moses
          </div>
		</div>
    </div>
  );
}

export default Developers;
