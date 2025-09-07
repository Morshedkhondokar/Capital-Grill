import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#181818] text-white text-center px-6">
      {/* Error Code */}
      <h1 className="text-7xl md:text-9xl font-bold text-red-600">404</h1>

      {/* Error Text */}
      <h2 className="mt-4 text-2xl md:text-4xl font-semibold">
        Oops! Page Not Found
      </h2>
      <p className="mt-3 text-gray-400 max-w-md">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-semibold hover:opacity-90 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
