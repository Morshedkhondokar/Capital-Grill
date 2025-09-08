import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";
import GoogleLoginBtn from "../GoogleLoginBtn";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const { loginUser, setUser } = useContext(AuthContext);
   const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    // login user
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex flex-col gap-12 items-center justify-center bg-[#161414] px-6 py-24 ">
      <div className="w-full max-w-md bg-[#181818]  rounded-2xl shadow-lg shadow-red-500 p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-sm text-yellow-300 mb-8">
          Please login to continue
        </p>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              onChange={(e) => setPasswordInput(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />

            {/* eye icons */}
            {passwordInput.length !== 0 ? (
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-xl cursor-pointer"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-red-500 size-4" />
              Remember me
            </label>
            <a href="#" className="text-yellow-400 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold hover:opacity-90 transition"
          >
            Login
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
      {/* login with google */}
      <GoogleLoginBtn/>
    </div>
  );
};

export default LoginForm;
