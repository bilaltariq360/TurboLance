import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function DevProposals() {
  return (
    <>
      <Navbar />
      <div className="flex space-x-4 py-6 px-2 pl-10">
      <div class="relative inline-flex">
        <Link to="/ProposalDashboard">
  <button
    class="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none py-3 px-6 rounded-lg bg-blue-900 text-white shadow-md active:opacity-[0.85] active:shadow-none"
    type="button">
    view History
  </button>
  </Link>
  <span
    class="absolute rounded-full py-1 px-1 text-xs font-medium content-[''] leading-none grid place-items-center top-[4%] right-[2%] translate-x-2/4 -translate-y-2/4 bg-red-500 text-white min-w-[24px] min-h-[24px]">
    5
  </span>
</div>



</div>
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
