import "./FeaturedApi.css";

function FeaturedApi({ isDarkMode }) {
  return (
    <div className="bg-white h-screen flex flex-col justify-center items-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center pb-8 pt-10 text-3xl font-bold">Featured APIs</h2>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">This API will be used to allow the user to input their specific location, to feed the other APIs integrated in this API</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"> Geolocation</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">This API will be used to get the current weather information of the user based on the current location (longitude and latitude) of the user from the Geolocation API</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Weather</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">This API will then take the “name” of the city from the response of the Weather API and use it to get the weather news for the current or preferred location of the user</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">News</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default FeaturedApi;
