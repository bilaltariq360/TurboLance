// Gigs.js
import profilePic from "../img/profile-pic.png";
import starim from "../img/star.png";
import androidDeveloper from "../img/gig-background.png";
import Navbar from "./Navbar";
import { FiSearch } from "react-icons/fi";
import Footer from "./Footer";

function Gigs() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50">
        <div className="flex justify-center pt-20">
          <input
            type="text"
            className="border-2 w-[15rem] md:w-[20rem] lg:ml-[5rem] px-4 py-2 rounded-tl-md rounded-bl-md focus:outline-none"
            placeholder="Explore Community"
          />
          <button
            type="submit"
            className="w-[8rem] bg-blue-900 text-white rounded-tr-md rounded-br-md hover:bg-blue-950 duration-500"
          >
            <div className="flex items-center justify-center">
              <div className="pr-5">Search</div>
              <FiSearch />
            </div>
          </button>
        </div>
        <section className="flex justify-around items-center flex-wrap px-10 py-20">
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
          <div className="bg-white w-[20rem] h-[28rem] rounded-md ml-1 mr-1 mt-10 shadow-lg">
            <img
              src={androidDeveloper}
              className="h-[11rem] w-full rounded-t-md"
            />
            <div className="flex items-center space-x-5 pt-5 px-5">
              <img src={profilePic} className="w-[2.5rem]" />
              <h1 className="font-bold text-2xl">Bilal Tariq</h1>
            </div>
            <p className="px-5 py-2 font-semibold">
              I am a software engineer and ready to make exiting websites.
            </p>
            <div className="flex items-center space-x-2 px-5 pt-1">
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                C++
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                Flutter
              </div>
              <div className="text-sm rounded-full bg-blue-200 text-blue-900 px-5 py-[0.1rem] font-bold">
                MERN
              </div>
            </div>
            <div className="flex items-center space-x-1 px-5 py-5">
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
              <img src={starim} className="w-[1.5rem]" />
            </div>

            <hr className="bg-gray-300 h-[0.15rem] mx-5" />
            <div className="flex justify-between items-center font-bold">
              <p className="py-3 pl-5">Hourly Rate</p>
              <p className="py-3 pr-5 text-2xl">$450</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Gigs;
