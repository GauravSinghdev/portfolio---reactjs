const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <p className="text-xl text-gray-700">Page Not Found</p>
        <p className="mt-4 text-lg text-gray-500">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-full transition"
        >
          Go back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
