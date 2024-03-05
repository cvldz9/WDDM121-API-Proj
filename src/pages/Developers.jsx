import "./Developers.css";
import JosephImage from "../assets/joseph.svg";
import DanielImage from "../assets/daniel.svg";
import PattyImage from "../assets/patty.svg";
import CatherineImage from "../assets/catherine.svg";


function Developers({ isDarkMode }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-center pb-8 pt-10 px-20 text-2xl self-center font-bold">Developers</h3>
        <div className="flex justify-center pb-8">
          <p className="sub-paragraph text-center">Explore this page to learn more about each member of our team. Discover their areas of expertise, passions, and contributions to our projects. Get to know the faces behind the code and see firsthand the dedication and passion that drive us forward. Join us on our journey as we collaborate, innovate, and create groundbreaking solutions together.</p>
        </div>
        <div className="grid gap-10 grid-cols-2 grid-rows-2">
          <div className="flex box-width rounded-lg shadow-md p-4">
			<img className="img-width h-auto" src={JosephImage} alt="" />
            <div>
				<p className="m-4 font-semibold text-xl">Joseph Moses</p>
				<p className="m-4 font-normal text-s text-justify">Joseph is a seasoned web developer with a decade of hands-on experience in the field. Proficient in a wide array of technologies such as <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Vue</strong>, he brings a wealth of knowledge and expertise to any project. With a track record of delivering high-quality solutions, Joseph combines technical prowess with creativity to drive innovation and success.</p>
			</div>
			
          </div>
          <div className="flex box-width bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4">
			<img className="img-width h-auto" src={DanielImage} alt="" />
            <div>
				<p className="m-4 font-semibold text-xl">Daniel Okonkwo</p>
				<p className="m-4 font-normal text-s text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam illo quas unde voluptatem perferendis quo quis quidem delectus tempora ad. Molestias inventore dolorem saepe magni deleniti eveniet sunt asperiores aut non aliquid voluptas libero dicta, id sequi sapiente expedita officiis quos nihil ipsum exercitationem. Id molestiae dolore aliquid dolor dicta.</p>
			</div>
          </div>
		  <div className="flex box-width bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4">
			<img className="img-width h-auto" src={PattyImage} alt="" />
            <div>
				<p className="m-4 font-semibold text-xl">Patty Bactad</p>
				<p className="m-4 font-normal text-s text-justify">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam illo quas unde voluptatem perferendis quo quis quidem delectus tempora ad. Molestias inventore dolorem saepe magni deleniti eveniet sunt asperiores aut non aliquid voluptas libero dicta, id sequi sapiente expedita officiis quos nihil ipsum exercitationem. Id molestiae dolore aliquid dolor dicta.</p>
			</div>
          </div>
		  <div className="flex box-width bg-gray-200 border border-gray-400 rounded-lg shadow-md p-4">
			<img className="img-width h-auto" src={CatherineImage} alt="" />
            <div>
				<p className="m-4 font-semibold text-xl">Catherine Valdez</p>
				<p className="m-4 font-normal text-s text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, est? Quam reprehenderit reiciendis harum. Iusto dolorem vel voluptates molestiae? Est molestias accusantium qui. Totam eos itaque harum illum? Culpa sint hic dolorem expedita pariatur iure explicabo esse eligendi totam sunt quis deleniti, quas eos qui ullam? Hic quos rerum numquam.</p>
			</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Developers;
