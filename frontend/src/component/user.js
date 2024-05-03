import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProfilePic from "../img/profile-pic.svg";
function user() {
  
  const user = {
    firstName: "Umar",
    lastName: "Bilal",
    tagline: "Helms sds d sd sdsd sdsdsdsdwe",
    skills: ["sdsd", "sdsdd", "er"],
    hourlyRate: "34",
  };

  return (
    <>
      <Navbar />
  
      <section className="container mx-auto pt-10 bg-white px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <img src={ProfilePic} className="mx-auto w-[10rem] md:w-[12rem] rounded-full" />
          <h1 className="mt-4 text-3xl font-bold text-gray-800">{user.firstName} {user.lastName}</h1>
          <p className="text-lg text-gray-600">{user.tagline}</p>
        </div>
  
        <div className="mt-8 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-gray-800">Skills:</h2>
          <div className="flex flex-wrap ">
            {user.skills.map((skill, index) => (
              <span key={index} className="m-1 bg-blue-200 text-blue-700 p-2 rounded-full">{skill}</span>
            ))}
          </div>
        </div>
  
        <div className="mt-8 px-4 sm:px-6 lg:px-8 pb-10">
          <h2 className="text-xl font-semibold text-gray-800">Hourly Rate:</h2>
          <p className="text-gray-700">${user.hourlyRate} per hour</p>
        </div>
      </section>
  
      <Footer />
    </>
  );
  
  
}

export default user;
