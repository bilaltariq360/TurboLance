import React from "react";
import Navbar from "./Navbar";

function DevProposals() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl bg-white rounded-lg shadow-md overflow-hidden mx-auto my-16">
        <div className="px-6 py-4">
          <h2 className="text-3xl font-bold text-gray-800">
            Join our community!
          </h2>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-center">
          <button className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out ">
            Accept
          </button>
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded transition duration-300 ease-in-out  ml-4">
            Decline
          </button>
        </div>
      </div>
    </>
  );
}

export default DevProposals;
