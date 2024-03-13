// Signin
import React from "react";
import logoim from "../img/Logo3.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Signin() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
          <img src={logoim} alt="logo" className="px-14" />
          <h1 className="text-center text-3xl font-bold mt-6 text-gray-800">
            Login
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Use your TurboLancer Account
          </p>
          <form className="mt-8 space-y-4">
            <div>
              <input
                type="text"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Password"
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-blue-600 text-sm hover:underline">
                Forgot Password?
              </a>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
              >
                Login
              </button>
            </div>
          </form>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Don't have an account?{" "}
              <Link to="/Signup" className="text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
