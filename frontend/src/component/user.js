import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfilePic from "../img/profile-pic.svg";
function user() {
  
  const user = {
    firstName: "Umar",
    lastName: "Bilal",
    tagline: "Coding is not just a profession, it’s a passion.",
    skills: ["Web Developer", "MERN stack", "DJANGO"],
    hourlyRate: "34",
  };

  return (
    <>
      <Navbar />
  
      <section className="container mx-auto pt-10 bg-white px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src={ProfilePic} className="mx-auto w-24 md:w-32 lg:w-48 rounded-full border-4 border-blue-500" />
          <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">{user.firstName} {user.lastName}</h1>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-600">{user.tagline}</p>
          <div className="mt-2">
            <span className="text-yellow-400">
              {'★'.repeat(Math.round(4))}
            </span>
            <span className="text-gray-300">
              {'★'.repeat(5 - Math.round(4))}
            </span>
          </div>
        </div>
  
        <div className="mt-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Skills:</h2>
          <div className="flex flex-wrap justify-center">
            {user.skills.map((skill, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                <span className="inline-block bg-blue-200 text-blue-700 p-2 rounded-full">Web Developer</span>
                
              </div>
            ))}
          </div>
        </div>
  
        <div className="mt-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-800">Hourly Rate:</h2>
          <p className="text-sm sm:text-lg lg:text-xl text-gray-700">${user.hourlyRate} per hour</p>
        </div>
  
        <div className="mt-8 px-4 sm:px-6 lg:px-8 py-10">
          <blockquote className="text-center text-gray-600 italic border-l-4 border-blue-500 pl-4">
            <p className="text-lg sm:text-xl lg:text-2xl">Your skills, your passion, our platform.</p>
          </blockquote>
        </div>
      </section>
  
      <Footer />
    </>
  );
  
  
  
  
  
  
}

export default user;
