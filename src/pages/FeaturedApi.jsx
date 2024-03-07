import "./FeaturedApi.css";

function FeaturedApi({ isDarkMode }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h3 className="text-center pb-8 pt-10 text-2xl font-bold">Featured APIs</h3>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Geolocation</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Your Geolocation Content Here</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">Weather</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Your Weather Content Here</dd>
          </div>
          <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">News</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Your News Content Here</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export default FeaturedApi;
