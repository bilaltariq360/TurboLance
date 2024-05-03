import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Link } from "react-router-dom";
import React from 'react';


function Footer() {
  return (
    <footer className="bg-blue-900 text-white p-10">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        {/* Brand Section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <a href="#" className="text-4xl font-bold hover:text-gray-300">TurboLance</a>
          <p className="mt-2 text-gray-200 text-sm">Creating exceptional experiences every day.</p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:flex lg:flex-col lg:items-center">
            <div className='text-left'>
          <h2 className="text-xl font-semibold mb-2">Quick Links</h2>
          <ul className="list-none">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li><Link to="/Gigs" className="hover:text-gray-300">Explore Community</Link></li>
            <li><Link to="/User" className="hover:text-gray-300">User</Link></li>
            <li><Link to="/Contact" className="hover:text-gray-300">Contact</Link></li>
          </ul>
          </div>
        </div>

        {/* Legal Links Section */}
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0 lg:flex lg:flex-col lg:items-end">
            <div className='text-left'>
          <h2 className="text-xl font-semibold mb-2">Legal</h2>
          <ul className="list-none">
            <li><Link to="/Documentation" className="hover:text-gray-300">Terms of Service</Link></li>
            <li><Link to="/Documentation" className="hover:text-gray-300">Privacy Policy</Link></li>
            <li><Link to="/Documentation" className="hover:text-gray-300">Accessibility</Link></li>
          </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-full  mb-6 lg:mb-0 lg:flex lg:justify-center">
          <div className="flex mt-8 justify-center">
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaFacebookF size="1.5em" />
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaTwitter size="1.5em" />
            </a>
            <a href="#" className="mr-4 hover:text-gray-300">
              <FaInstagram size="1.5em" />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaLinkedinIn size="1.5em" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-200 mt-4 border-t pt-8">
        © 2024 TurboLance, Inc. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
