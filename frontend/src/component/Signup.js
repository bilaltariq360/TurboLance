// SignUp.js
import React from "react";
import logoim from "../img/Logo3.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Signup() {
  const notify = async (e) => {
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let validEmail = String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
    let password = document.getElementById("password").value;
    let conPassword = document.getElementById("confirm-password").value;
    let client = document.getElementById("client").checked;
    let developer = document.getElementById("developer").checked;
    let errMsg = "";

    if (!fName) errMsg = "Please enter first name";
    else if (fName.length < 3) errMsg = "Please enter valid first name";
    else if (!lName) errMsg = "Please enter last name";
    else if (lName.length < 3) errMsg = "Please enter valid last name";
    else if (!validEmail) errMsg = "Please enter valid email";
    else if (!password) errMsg = "Please enter password";
    else if (password.length < 6) errMsg = "Please enter strong password";
    else if (!conPassword) errMsg = "Please enter confirm password";
    else if (conPassword !== password) errMsg = "Password does'nt matched";
    else if (!client && !developer) errMsg = "Please select mode";

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
      return;
    }
    try {
      await axios({
        method: "post",
        url: "/Signup",
        data: {
          fname: fName,
          lname: lName,
          email: email,
          password: password,
          conPassword: conPassword,
        },
      });
      toast.success("Message sent successfully", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } catch (error) {
      toast.error("Failed to send message", {
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
          <form className="mt-8 space-y-4" onSubmit={notify}>
            <div className="flex">
              <input
                id="firstName"
                type="text"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="First Name"
              />
              <div className="px-2"></div>
              <input
                id="lastName"
                type="text"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Last Name"
              />
            </div>
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
            <div>
              <input
                id="confirm-password"
                type="password"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Confirm Password"
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
