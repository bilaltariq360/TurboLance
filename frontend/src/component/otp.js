import React from "react";
import logoim from "../img/Logo3.png";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

let generatedOTP = "";
function Otp(props) {
  const navigate = useNavigate();
  const location = useLocation();
  let data = location.state.data;
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

  const sendOtp = async () => {
    await axios({
      method: "post",
      url: "/Otp",
      data: {
        email: data.email,
        otp: generatedOTP,
      },
    });
  };

  const notify = async (event) => {
    event.preventDefault();
    let otp = document.getElementById("otp").value;

    if (otp === generatedOTP) {
      await axios({
        method: "post",
        url: "/Signup",
        data: {
          fname: data.fName,
          lname: data.lName,
          email: data.email,
          password: data.password,
        },
      });
      toast.success("Account created successfully", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } else {
      toast.error("OTP didn't matched", {
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
            Verify your account
          </h1>

          <form className="mt-8 space-y-4" onSubmit={notify}>
            <div>
              <input
                type="text"
                className="border-2 w-full px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
                placeholder="6 digit OTP"
                id="otp"
              />
            </div>
            <div>
              <button
                onClick={sendOtp}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
              >
                Send OTP
              </button>

              {/* <Link to="/"> */}
              <button
                onClick={notify}
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-2"
              >
                Verify
              </button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Otp;
