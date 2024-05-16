import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

import axios from "axios";

function DevProposals() {
  const [proposals, setProposals] = useState([]);
  const [showSpinner, setShowSpinner] = useState(true);
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetchEmail();
  }, []);

  const fetchEmail = async () => {
    try {
      const response = await axios.get("/GetEmail");
      setEmail(response.data);
      fetchData(response.data); // Call fetchData with the email
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchData = async (email) => {
    try {
      const response = await axios.get("/DevProposalsPending", {
        params: {
          demail: email,
        },
      });
      setProposals(response.data);
      setTimeout(() => {
        setShowSpinner(false);
      }, 500);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const updateStatus = async () => {
    setShowSpinner(true);
    try {
      const response = await axios.post("/DevProposalStatusUpdate", {
        cemail: proposals[0].cemail,
        demail: email,
        cpdescription: proposals[0].cpdescription,
      });
      fetchEmail();
      setTimeout(() => {
        setShowSpinner(false);
      }, 1000);
    } catch (error) {
      console.error("Error updating proposal:", error);
    }
  };

  const deleteProposal = async () => {
    setShowSpinner(true);
    try {
      const response = await axios.post("/DevProposalDelete", {
        cemail: proposals[0].cemail,
        demail: email,
        cpdescription: proposals[0].cpdescription,
      });
      fetchEmail();
      setTimeout(() => {
        setShowSpinner(false);
      }, 1000);
    } catch (error) {
      console.error("Error deleting proposal:", error);
    }
  };

  return (
    <>
      <Navbar />
      <p className="text-4xl text-gray-200 text-center font-bold mt-20">
        Project Proposals
      </p>
      {showSpinner && (
        <div className="flex items-center justify-center h-[90vh]">
          <Spinner className="h-12 w-12" color="black" />
        </div>
      )}
      {!showSpinner && proposals.length > 0 ? (
        proposals.map((proposal, index) => (
          <div
            key={index}
            className="max-w-5xl bg-white rounded-lg shadow-md overflow-hidden mx-auto my-10"
          >
            <div className="border-t border-gray-200">
              <div className="px-6 py-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  {proposal.cfname + " " + proposal.clname}
                </h2>
                <p className="text-gray-700">{proposal.cpdescription}</p>
              </div>
              <div className="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-center">
                <button
                  onClick={updateStatus}
                  className="bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out "
                >
                  Accept
                </button>
                <button
                  onClick={deleteProposal}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-10 rounded transition duration-300 ease-in-out  ml-4"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center font-bold text-3xl bg-yellow-600 py-5 mt-10">
          No proposals found!
        </div>
      )}
    </>
  );
}

export default DevProposals;
