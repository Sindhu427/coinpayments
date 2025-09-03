import React, { useState } from "react";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-black text-white px-6 md:px-16 py-4 flex items-center justify-between relative ">
      {/* Logo + Partner */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="CoinPayments" className="h-8" />
        <div className="h-8 border-l border-gray-500"></div>
        <img src={logo2} alt="Partner" className="h-6" />
      </div>

      {/* Center Nav */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium relative">
        {/* For Businesses */}
        <li
          className="relative"
          onMouseEnter={() => setOpenDropdown("business")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => toggleDropdown("business")}
            className="flex items-center gap-2 hover:text-blue-400"
          >
            FOR BUSINESSES
            <span className="text-lg font-bold">
              {openDropdown === "business" ? "−" : "+"}
            </span>
          </button>
          {openDropdown === "business" && (
            <div className="absolute mt-3 left-0 bg-[#1a1f36] text-white shadow-lg rounded-lg py-3 px-5 space-y-2 w-48 z-50">
              <p className="hover:text-blue-400 cursor-pointer">
                Business Features
              </p>
              <p className="hover:text-blue-400 cursor-pointer">
                Merchant Tools
              </p>
            </div>
          )}
        </li>

        {/* For Individuals */}
        <li
          className="relative"
          onMouseEnter={() => setOpenDropdown("individuals")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => toggleDropdown("individuals")}
            className="flex items-center gap-2 hover:text-blue-400"
          >
            FOR INDIVIDUALS
            <span className="text-lg font-bold">
              {openDropdown === "individuals" ? "−" : "+"}
            </span>
          </button>
          {openDropdown === "individuals" && (
            <div className="absolute mt-3 left-0 bg-[#1a1f36] text-white shadow-lg rounded-lg py-3 px-5 space-y-2 w-48 z-50">
              <p className="hover:text-blue-400 cursor-pointer">Wallet</p>
              <p className="hover:text-blue-400 cursor-pointer">
                Prepaid Cards
              </p>
            </div>
          )}
        </li>

        {/* Resources */}
        <li
          className="relative"
          onMouseEnter={() => setOpenDropdown("resources")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button
            onClick={() => toggleDropdown("resources")}
            className="flex items-center gap-2 hover:text-blue-400"
          >
            RESOURCES
            <span className="text-lg font-bold">
              {openDropdown === "resources" ? "−" : "+"}
            </span>
          </button>
          {openDropdown === "resources" && (
            <div className="absolute mt-3 left-0 bg-[#1a1f36] text-white shadow-lg rounded-lg py-3 px-5 space-y-2 w-56 z-50">
              <p className="hover:text-blue-400 cursor-pointer">
                Integration Guide
              </p>
              <p className="hover:text-blue-400 cursor-pointer">
                API Documentation
              </p>
              <p className="hover:text-blue-400 cursor-pointer">FAQ</p>
            </div>
          )}
        </li>

        <li className="hover:text-blue-400 cursor-pointer">COINS</li>
        <li className="hover:text-blue-400 cursor-pointer">SUPPORT</li>
      </ul>

      {/* Right Buttons */}
      <div className="flex gap-4">
        <button className="px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black transition">
          Log In
        </button>
        <button className="px-4 py-1 bg-blue-200 text-black rounded-full font-medium hover:bg-blue-300 transition">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
