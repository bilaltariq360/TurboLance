import React, { useState, useEffect } from "react";
import logoim from "../img/Logo3.png";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Otp() {
 const [validation, setValidation] = useState(false);
 const generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();

 const sendOtp = async () => {
    await axios({
      method: "post",
      url: "/Otp",
      data: {
        email: "bumar1289@gmail.com",
        otp: generatedOTP
      }
    });
 }

 useEffect(() => {
    sendOtp();
 }, []); // This ensures sendOtp runs only once when the component mounts

 const notify = async (event) => {
    event.preventDefault(); // Prevent form submission
    let otp = document.getElementById('otp').value;
    
    if(otp === generatedOTP){
      await axios({
        method: "post",
        url: "/Signup",
        data: {
          fname: "",
          lname: "",
          email: "",
          password: "",
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
      setValidation(true);
    }
 }

 return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen my-20">
        <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-lg">
          <img src={logoim} alt="logo" className="flex justify-center items-center px-14" />
          <h1 className="text-center text-3xl font-bold mt-6 pl-5 text-gray-800">Verify your account</h1>
          
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
              {/* {validation ? ( */}
                <Link to="/">
                 <button 
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
                 >
                    Verify
                 </button>
                </Link>
              {/* // ) : ( */}
                 <button 
                 type="submit"
                 className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 mt-6"
                >
                 Verify
                </button>
              {/* )} */}
            </div>
          </form>
          
        </div>
      </div>
    </>
 );
}

export default Otp;