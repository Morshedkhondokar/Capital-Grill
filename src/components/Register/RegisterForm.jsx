import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterForm = () => {
const [showPassword, setShowPassword] = useState(false)
    const handleRegister = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        console.log(name,email,password,confirmPassword)
        if(password !== confirmPassword){
            alert('your password is not currect')
            return
        }
        alert('log in confirm')

    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#161414] px-6 py-24">
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
            <label className="block text-sm font-medium mb-2">Email Address</label>
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
              type={showPassword ? 'text':'password'}
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
            {/* eye icons */}
           <div onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-10 text-xl cursor-pointer">
            {
                showPassword ? <FaEyeSlash  /> :  <FaEye />
            }          
           </div>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type={showPassword ? 'text':'password'}
              name="confirmPassword"
              placeholder="Re-enter your password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
             {/* eye icons */}
           <div onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-10 text-xl cursor-pointer">
            {
                showPassword ? <FaEyeSlash  /> :  <FaEye />
            }          
           </div>
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
          <a href="/login" className="text-yellow-400 font-semibold hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
