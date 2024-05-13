import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const ProposalCard = ({ clientName, proposalDescription, acceptedDate, completedDate }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h3 className="text-2xl font-bold mb-2">{clientName}</h3>
      <p className="text-gray-700 mb-2">{proposalDescription}</p>
      <p className="text-sm text-gray-500">Accepted: {acceptedDate}</p>
      {completedDate ? (
        <p className="text-sm text-green-500 font-semibold">Completed: {completedDate}</p>
      ) : (
        <p className="text-sm text-blue-500 font-semibold">Status: Ongoing</p>
      )}
    </div>
  );
};

const ProposalDashboard = () => {
    return (
      <>
        <Navbar />
        <div className="flex justify-center items-center mt-10">
          <div className="flex flex-col items-center">
            <div className=" flex justify-between mx-10">
              {/* Accepted Proposals */}
              <div className="w-2/5">
                <h2 className="text-lg font-semibold mb-4 text-white">Accepted Proposals</h2>
                {/* Replace with your accepted proposals data */}
                <ProposalCard
                  clientName="Client A"
                  proposalDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  acceptedDate="2024-05-10"
                  completedDate=""
                />
                <ProposalCard
                  clientName="Client B"
                  proposalDescription="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  acceptedDate="2024-05-08"
                  completedDate=""
                />
                <ProposalCard
                  clientName="Client B"
                  proposalDescription="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  acceptedDate="2024-05-08"
                  completedDate=""
                />
              </div>
  
            
              {/* Completed Proposals */}
              <div className="w-2/5">
                <h2 className="text-lg font-semibold mb-4 text-white">Completed Proposals</h2>
                {/* Replace with your completed proposals data */}
                <ProposalCard
                  clientName="Client C"
                  proposalDescription="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                  acceptedDate="2024-05-05"
                  completedDate="2024-05-09"
                />
                <ProposalCard
                  clientName="Client D"
                  proposalDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  acceptedDate="2024-05-02"
                  completedDate="2024-05-07"
                />
                <ProposalCard
                  clientName="Client D"
                  proposalDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  acceptedDate="2024-05-02"
                  completedDate="2024-05-07"
                />
                <ProposalCard
                  clientName="Client D"
                  proposalDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  acceptedDate="2024-05-02"
                  completedDate="2024-05-07"
                />
                <ProposalCard
                  clientName="Bilal baita"
                  proposalDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  acceptedDate="2024-05-02"
                  completedDate="213"
                />
                <ProposalCard
                  clientName="Client D"
                  proposalDescription="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                  acceptedDate="2024-05-02"
                  completedDate="2024-05-07"
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  };
  
  export default ProposalDashboard;
  


