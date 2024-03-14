// Signin
import React from "react";
import logoim from "../img/Logo3.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const notify = (e) => {
    let email = document.getElementById("email").value;
    let validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    let password = document.getElementById("password").value;
    let errMsg = "";

    if (!validEmail) errMsg = "Please enter valid email";
    else if (!password) errMsg = "Please enter password";
    else if (password.length < 6) errMsg = "Please enter correct password";

    if (errMsg) {
      toast.error(errMsg, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.success("Loged in successfully", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
    e.preventDefault();
  };
  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
          <img src={logoim} alt="logo" className="px-14" />
          <h1 className="text-center text-3xl font-bold mt-6 text-gray-800">
            Login
          </h1>
          <p className="text-center text-gray-600 mt-2">
            Use your TurboLancer Account
          </p>
          <form className="mt-8 space-y-4" onSubmit={notify}>
            <div>
              <input
                id="email"
                type="text"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                id="password"
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
