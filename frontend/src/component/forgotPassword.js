import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling forgot password request here
    // For example, send a reset password link to the provided email
    // Display appropriate notifications to the user
    toast.success("Password reset instructions sent to your email", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
          <h1 className="text-center text-3xl font-bold mt-6 text-gray-800">
            Forgot Password
          </h1>
          <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="Email"
              />
            </div>
            <div className="text-right">
              <Link to="/signin" className="text-blue-600 text-sm hover:underline">
                Remember your password? Sign in
              </Link>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
              >
                Reset Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
