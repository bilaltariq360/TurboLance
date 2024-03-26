// Dashboard.js
import { React, useState, useEffect } from "react";
import Navbar from "./Navbar";
import ProfilePic from "../img/profile-pic.svg";
import { IoIosAdd, IoIosCloseCircle } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaSave } from "react-icons/fa";
import Footer from "./Footer";
import axios from "axios";

function Dashboard() {
  const [skills, setSkills] = useState([]);
  const [users, setUsers] = useState([]);
  const location = useLocation();
  let data = location.state.data;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/Dashboard");
      setUsers(response.data);
    };

    fetchData();
  }, []);

  function addSkill() {
    const newSkill = document.getElementById("skill").value;
    if (
      newSkill.length !== 0 &&
      !skills.includes(newSkill) &&
      skills.length !== 3
    ) {
      setSkills((prevSkills) => [...prevSkills, newSkill]);
      document.getElementById("skill").value = "";
    }
  }
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 px-8 h-[100vh] lg:h-[130vh]">
        <div className="flex items-center justify-center sm:justify-start">
          <img src={ProfilePic} className="w-[10rem] md:w-[12rem]" />
          <div className="flex flex-col border-l-blue-800 border-l-4">
            <h1 className=" pl-5 text-3xl md:text-4xl font-bold text-gray-700">
              {data.fName + " " + data.lName}
            </h1>
            <p className=" pl-5 font-semibold text-gray-700">
              Software Engineer
            </p>
          </div>
        </div>
        <div className="flex flex-col mx:5 md:mx-20 lg:mx-48 mb-12">
          <label className="font-bold text-xl pb-1">
            Tag Line <span className="text-red-600 font-black">*</span>
          </label>
          <input
            type="text"
            className="border-2 px-4 py-2 rounded-md focus:outline-none focus:border-blue-400"
            placeholder="This sould be shown on your gig"
            required
          />
        </div>
        <div className="flex flex-col mx:5 md:mx-20 lg:mx-48 mb-12">
          <label className="font-bold text-xl pb-1">
            Add Skills <span className="text-red-600 font-black">*</span>
          </label>
          <div className="flex">
            <input
              type="text"
              className="border-2 w-full px-4 py-2 rounded-l-md focus:outline-none focus:border-blue-400"
              placeholder="Add skills"
              id="skill"
              required
            />
            <button
              type="submit"
              onClick={addSkill}
              className="flex justify-center items-center w-[10rem] font-semibold text-gray-100 bg-blue-900 rounded-r-md hover:bg-blue-800 duration-300"
            >
              Add
              <IoIosAdd className="text-2xl" />
            </button>
          </div>
          <div className="flex items-center flex-wrap space-x-2 pt-5">
            {skills.map((skill, index) => (
              <div className="flex items-center text-md rounded-full bg-blue-200 text-blue-900 px-4 py-[0.2rem] mb-3 font-bold">
                <div key={index} className="pr-1">
                  {skill}
                </div>
                <IoIosCloseCircle className="text-xl cursor-pointer ml-2" />
              </div>
            ))}
          </div>
          <div className="flex flex-col mt-8 mb-12">
            <label className="font-bold text-xl pb-1">
              Hourly Rate <span className="text-red-600 font-black">*</span>
            </label>
            <div className="flex">
              <button
                type="submit"
                onClick={addSkill}
                className="flex justify-center items-center w-[10rem] font-semibold text-gray-100 bg-blue-900 rounded-l-md hover:bg-blue-800 duration-300"
              >
                $ (Dollar)
              </button>
              <input
                type="text"
                className="border-2 w-full px-4 py-2 rounded-r-md focus:outline-none focus:border-blue-400"
                placeholder="Hourly rate in dollars"
                required
              />
            </div>
          </div>
          <div className="flex justify-center mt-24">
            <button
              type="submit"
              className="w-[15rem] h-[3.5rem] font-semibold text-gray-100 bg-blue-900 rounded-md hover:bg-blue-700 duration-300"
            >
              <div className="flex items-center justify-center">
                <div className="pr-5 text-xl">Save My Info</div>
                <FaSave className="text-2xl" />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
