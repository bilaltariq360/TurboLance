// 404.js
import React, { useState } from "react";
import errim from "../img/404.png";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa6";

function Error() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[100vh]">
        <img src={errim} className="w-[80vh]" />
        <Link to="/">
          <button className="bg-blue-800 text-white w-[10rem] py-[0.7rem] rounded-md font-[400] hover:bg-blue-700 duration-500">
            <div className="flex items-center justify-center text-xl">
              Home <div className="pr-3"></div>{" "}
              <FaArrowUp className="animate-pulse" />
            </div>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Error;
