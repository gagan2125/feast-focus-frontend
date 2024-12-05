/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-[20px] p-6">
        {/* Logo */}
        <div className="flex justify-center  mt-0 ">
          <img
            src="/assets/ffIcon.png"
            alt="Logo"
            className="w-20 h-20 " // Logo size
          />
        </div>
        {/* Welcome Message */}
        <h2 className="text-sm font-medium text-gray-800 text-center  mt-0">
          Welcome back
        </h2>
        <p className="text-xs text-gray-500 text-center mt-1">
          Please enter your details to login in.
        </p>
        {/* Social Buttons */}
        <div className="flex justify-center gap-2 mt-4">
          <button className="w-20 h-8 rounded-[5px] bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <FontAwesomeIcon icon={faFacebook} className="text-blue-500" />
          </button>
          <button className="w-20 h-8 rounded-[5px] bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <FontAwesomeIcon icon={faGoogle} className="text-orange-500" />
          </button>
          <button className="w-20 h-8 rounded-[5px] bg-gray-100 hover:bg-gray-300 flex items-center justify-center">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
          </button>
        </div>
        {/* OR Divider */}
        <div className="flex items-center my-3">
          <hr className="flex-1 border-gray-300" />
          <span className="px-2 text-xs text-gray-400">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>
        {/* Form */}
        <form className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {/* Email Address */}
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border border-gray-300 rounded-[5px]  text-sm"
            />
          </div>

          {/* Phone Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {/* Phone Number */}
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-3 py-2 border border-gray-300 rounded-[5px]  text-sm"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-600">
              {/* Password */}
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border border-gray-300 rounded-[5px]  focus:ring-red-200 f text-sm"
            />
          </div>

          {/* Options */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="rounded-[20px] border-gray-300 text-red-500 focus:ring-0"
              />
              <span className="ml-1 text-gray-600">Remember me</span>
            </label>
            <a href="#" className="text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign-In Button */}
          <button
            type="submit"
            className="w-full py-2 text-sm font-medium text-white bg-primary rounded-[20px] hover:bg-blue-600"
          >
            Login
          </button>
        </form>
        {/* Sign-Up Link */}
        {/* <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Login;
