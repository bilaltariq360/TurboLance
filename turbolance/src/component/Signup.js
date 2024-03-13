// SignUp.js
import React from "react";
import logoim from "../img/Logo3.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Signup() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen my-20">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
          <img
            src={logoim}
            alt="logo"
            className="flex justify-center items-center px-14"
          />
          <h1 className="text-center text-3xl font-bold mt-6 pl-5 text-gray-800">
            Create new account
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Join TurboLance community
          </p>
          <form className="mt-8 space-y-4">
            <div className="flex">
              <input
                type="text"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="First Name"
                required
              />
              <div className="px-2"></div>
              <input
                type="text"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Last Name"
                required
              />
            </div>
            <div>
              <input
                type="email"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <input
                type="password"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div className="flex justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="client"
                  name="userType"
                  className="cursor-pointer appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-800 checked:border-transparent focus:outline-none"
                />
                <label htmlFor="client" className="pl-3 cursor-pointer">
                  Join as a client
                </label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="developer"
                  name="userType"
                  className="cursor-pointer appearance-none border-2 border-gray-300 rounded-full w-6 h-6 checked:bg-blue-800 checked:border-transparent focus:outline-none"
                />
                <label htmlFor="developer" className="pl-3 cursor-pointer">
                  Join as a developer
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
              >
                Create Account
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account?{" "}
              <Link to="/Signin" className="text-blue-600 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
