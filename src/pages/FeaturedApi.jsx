import "./FeaturedApi.css";

function FeaturedApi({ isDarkMode }) {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="py-8 text-3xl font-bold">Featured APIs</h2>
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="mx-4 my-2 flex flex-col max-w-xs">
            <dt className="text-base leading-7 text-gray-600">
              This API will be used to allow the user to input their specific location, to feed the other APIs integrated in this API
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Geolocation</dd>
          </div>
          <div className="mx-4 my-2 flex flex-col max-w-xs">
            <dt className="text-base leading-7 text-gray-600">
              This API will be used to get the current weather information of the user based on the current location (longitude and latitude) of the user from the Geolocation API
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Weather</dd>
          </div>
          <div className="mx-4 my-2 flex flex-col max-w-xs">
            <dt className="text-base leading-7 text-gray-600">
              This API will then take the “name” of the city from the response of the Weather API and use it to get the weather news for the current or preferred location of the user
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">News</dd>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedApi;
