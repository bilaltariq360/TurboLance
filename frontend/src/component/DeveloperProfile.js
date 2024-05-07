import React, { useState } from 'react';
import profilePic from "../img/profile-pic.png";
import starim from "../img/star.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

function DevProfile({ user }) {
    
        const [selectedFile, setSelectedFile] = useState();
      
        const handleFileChange = (event) => {
          setSelectedFile(event.target.files[0]);
        };
      
        const handleUpload = () => {
          if (!selectedFile) {
            alert('Please select a file first.');
            return;
          }
      
          // Here you can handle the file upload. For example, you can send the file to a server.
          alert(`File ${selectedFile.name} is ready to be uploaded.`);
        };
        const getTruncatedFileName = () => {
            if (selectedFile) {
              return selectedFile.name.length > 12 ? `${selectedFile.name.substring(0, 10)}...` : selectedFile.name;
            }
            return 'Select File';
          };
  return (
    <>
    <Navbar />
    <div className='flex flex-col items-center justify-center py-24' >
      <div className="bg-gray-200 shadow-lg  rounded-lg px-8 pt-6 pb-8 mb-4 flex flex-col my-2 w-full md:w-3/4 lg:w-1/2" style={{boxShadow: '0 1px 50px 20px #4a5ea4fe' }}>
        <div className="flex border-b border-lighter py-4" style={{ borderColor: 'black' }}>
          <img src={profilePic} className="w-10 h-10 rounded-full mr-4" alt="Profile" />
          <div>
            <p className="font-bold text-lg">name</p>
            <p className="text-sm text-grey-dark"> Tagline</p>
          </div>
        </div>
        <div className="py-4">
          <h2 className="font-bold text-lg">Skills</h2>
          <div className="flex flex-wrap mt-2">
            
              <span  className="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2">Skills</span>
            
          </div>
        </div>
        <div className="flex border-t border-lighter py-4" style={{ borderColor: 'black' }}>
          <div className="flex-1">
            <p className="text-grey-darker">Hourly Rate</p>
            <p className="font-bold text-lg">40$</p>
          </div>
          <div className="flex-1">
            <p className="text-grey-darker">Rating</p>
            <div className="flex items-center">
              {[...Array(5)].map((e, i) => <img key={i} src={starim} className="w-4 h-4 mr-1" alt="Star" />)}
            </div>
          </div>
        </div>
        


            
        
      </div>
        <h1 className='text-white text-3xl font-bold pt-20'>Project Proposal</h1>
      <div className='flex items-center justify-center space-x-2 pt-10'>
      <input type="file" onChange={handleFileChange} className="hidden" id="file-input" />
      <label htmlFor="file-input" className="cursor-pointer bg-green-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        {getTruncatedFileName()}
      </label>
      {selectedFile && (
        <button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send to developer
        </button>
      )}
    </div> 
      </div>
      <Footer />
      </>
  );
}

export default DevProfile;
