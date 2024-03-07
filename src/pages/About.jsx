import "./About.css";
import GlobeImage from "../assets/globe.svg";

function About({ isDarkMode }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <h3 className="text-center pb-8 pt-10 px-20 text-2xl self-center font-bold">About</h3>
        <div className="flex justify-center items-center flex-col pb-8">
          <img className="w-[40rem] mb-4" src={GlobeImage} alt="" />

          <p className="sub-paragraph text-center">
            Our goal is to create an application that will provide users with personalized local information based on their <strong>geolocation</strong>.

            This platform will offer <strong>real-time weather</strong> updates and relevant <strong>local news</strong> to enhance the user experience and keep them informed about their surroundings.

            It will also include the functionality to enable users to search the weather and news in any location at any given time. As well as the ability to filter news based on their references.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
