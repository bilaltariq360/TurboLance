import React, { useState, useEffect } from "react";
import ProfilePic from "../img/profile-pic.svg";
import Signin from "../img/signin.png";
import axios from "axios";

function UsrDashboard() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/UsrDashboard");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };
  return (
    <>
      <section className="pt-10 h-[100vh] bg-gray-50 px-4 sm:px-6 lg:px-8">
        {users.length === 0 ? (
          <div className="flex justify-evenly items-center">
            <img src={Signin} className="w-[30%] h-[30%]" />
            <div className="bg-gray-50 px-8 h-[70vh] text-5xl font-bold flex justify-center items-center">
              Signin First!
            </div>
          </div>
        ) : (
          <div className="text-center">
            <img
              src={ProfilePic}
              className="mx-auto w-24 md:w-32 lg:w-48 rounded-full border-4 border-blue-500"
            />
            {users.length > 0 && (
              <>
                <h1 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                  {users[0].fname} {users[0].lname}
                </h1>
                <p className="text-sm sm:text-lg lg:text-xl text-gray-600">
                  {users[0].email}
                </p>
                <div className="flex items-center justify-center">
                  <p className="text-sm sm:text-lg pt-28 pr-3 lg:text-xl">
                    TurboLance Member since
                  </p>
                  <p className="text-sm sm:text-lg pt-28 lg:text-xl font-bold">
                    {formatDate(users[0].entryDate)}
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <p className="text-sm sm:text-lg pr-3 lg:text-xl">
                    Projects Completed
                  </p>
                  <p className="text-sm sm:text-lg lg:text-xl font-bold">
                    {10}
                  </p>
                </div>
              </>
            )}
          </div>
        )}
      </section>
    </>
  );
}

export default UsrDashboard;
