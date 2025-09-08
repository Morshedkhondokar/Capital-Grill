import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AuthContext from "../../context/AuthContext";
import toast from "react-hot-toast";
import GoogleLoginBtn from '../GoogleLoginBtn'
import { useLocation, useNavigate } from "react-router";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const { createNewUser, setUser } = useContext(AuthContext);
   const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // user create func
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    console.log(name, email, password, confirmPassword);
    if (password.length < 6) {
      toast.error("password must be 6 characters");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    // user create
    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.reset();
  };
  return (
    <div className="min-h-screen flex flex-col gap-12 items-center justify-center bg-[#161414] px-6 py-24">
      <div className="w-full max-w-md bg-[#181818] rounded-2xl shadow-lg shadow-red-500 p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-red-500 mb-6">
          Create Account
        </h2>
        <p className="text-center text-sm text-yellow-300 mb-8">
          Join us today! Fill in the details to register.
        </p>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

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
             {
                passwordInput.length !== 0 ? <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-xl cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div> : ""
            }
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">
              Confirm Password
            </label>
            <input
            onChange={(e) => setPasswordInput(e.target.value)}
              type={showPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            {/* eye icons */}
            {
                passwordInput.length !== 0 ? <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-xl cursor-pointer"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div> : ""
            }
          </div>

          {/* Terms & Conditions */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="size-4 accent-red-600" required />
            <span>
              I agree to the{" "}
              <a href="#" className="text-yellow-400 hover:underline">
                Terms & Conditions
              </a>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white font-bold hover:opacity-90 transition"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-6 text-sm">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Login
          </a>
        </p>
      </div>

      {/* log in with google */}
      <GoogleLoginBtn/>
    </div>
  );
};

export default RegisterForm;
