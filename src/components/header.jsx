import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  return (
    <nav className="bg-black/45 shadow-2xl text-white px-6 md:px-16 py-4 flex items-center justify-between fixed w-full top-0 z-50">
      {/* Logo + Partner */}

      <div className="flex items-center gap-4">
        <Link to="/">
          <img src={logo} alt="CoinPayments" className="h-12 cursor-pointer" />
        </Link>
        <div className="h-14 border-l border-white"></div>
        <Link to="/">
          <img src={logo2} alt="Partner" className="h-12 cursor-pointer" />
        </Link>
      </div>

      {/* Right Buttons */}
      <div className="flex gap-4">
        <ul className="hidden md:flex items-center gap-8 relative">
          {/* FOR BUSINESSES */}
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
            <div
              className={`absolute left-0 mt-2 bg-[#1a2440] text-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-50 transition-all duration-200 ${
                openDropdown === "business"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <Link
                to="/"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                Business Features
              </Link>
              <Link
                to="/merchant"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                Merchant Tools
              </Link>
            </div>
          </li>

          {/* FOR INDIVIDUALS */}
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
            <div
              className={`absolute left-0 mt-2 bg-[#1a2440] text-white shadow-lg rounded-lg p-4 space-y-2 w-48 z-50 transition-all duration-200 ${
                openDropdown === "individuals"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <Link
                to="/wallet"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                Prepaid Wallet
              </Link>
              <Link
                to="/prepaidcards"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                Prepaid Cards
              </Link>
            </div>
          </li>

          {/* RESOURCES */}
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
            <div
              className={`absolute left-0 mt-2 bg-[#1a2440] text-white shadow-lg rounded-lg p-4 space-y-2 w-56 z-50 transition-all duration-200 ${
                openDropdown === "resources"
                  ? "opacity-100 visible"
                  : "opacity-0 invisible"
              }`}
            >
              <Link
                to="/integration-guide"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                Integration Guide
              </Link>
              <Link
                to="/api-docs"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                Integration Options
              </Link>
              <Link
                to="/api-docs"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                API Documentation
              </Link>
              <Link
                to="/faq"
                className="block hover:bg-[#232E4D] px-2 py-2 rounded"
              >
                FAQ
              </Link>
            </div>
          </li>

          {/* Simple Links */}
          <li>
            <Link to="/coins" className="hover:text-blue-400">
              COINS
            </Link>
          </li>
          <li>
            <Link to="/support" className="hover:text-blue-400">
              SUPPORT
            </Link>
          </li>
        </ul>

        {/* Auth Buttons */}
        <Link
          to="/login"
          className="px-4 py-1 border border-white rounded-full hover:bg-white hover:text-black transition"
        >
          LOG IN
        </Link>
        <Link
          to="/signup"
          className="px-4 py-1 bg-gradient-to-br from-white to-blue-200 text-blue-900 hover:text-black rounded-full font-medium hover:bg-gradient-to-br hover:from-white hover:to-white transition"
        >
          SIGN UP
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
