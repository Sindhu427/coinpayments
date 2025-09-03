import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaFacebookF,
  FaTelegram,
  FaLinkedinIn,
  FaYoutube,
  FaPinterestP,
  FaTiktok,
  FaReddit,
} from "react-icons/fa6";
import logo from "../assets/logo.webp";
import logo2 from "../assets/logo2.webp";
import iso from "../assets/iso.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 md:px-20 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Links Section */}
        <div className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-10 text-sm">
          <div className="space-y-2">
            <p>FOR BUSINESSES</p>
            <p>PERSONAL WALLET</p>
            <p>MERCHANT TOOLS</p>
            <p>SUPPORTED COINS</p>
            <p>PREPAID CARDS</p>
          </div>
          <div className="space-y-2">
            <p>INTEGRATION GUIDE</p>
            <p>INTEGRATION OPTIONS</p>
            <p>API DOCUMENTATION</p>
            <p>FAQ</p>
          </div>
          <div className="space-y-2">
            <p>CONTACT SALES</p>
            <p>SUPPORT</p>
            <p>PRIVACY POLICY</p>
            <p>USER AGREEMENT</p>
            <p>RESTRICTED JURISDICTIONS</p>
            <p>COINPAYMENTS LEGACY</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-2">Newsletter</h3>
          <p className="text-sm mb-4">Stay up to date with the latest news:</p>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 focus:outline-none"
          />
          <button className="mt-4 bg-blue-200 text-black py-2 px-6 rounded-lg font-medium">
            Subscribe
          </button>
          {/* Social icons */}
          <div className="flex gap-5 mt-6 text-xl">
            <FaXTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="hover:text-pink-400 cursor-pointer" />
            <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
            <FaTelegram className="hover:text-sky-400 cursor-pointer" />
            <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
            <FaPinterestP className="hover:text-red-400 cursor-pointer" />
            <FaTiktok className="hover:text-gray-400 cursor-pointer" />
            <FaReddit className="hover:text-orange-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-14 border-t border-gray-700 pt-6 gap-6">
        <div className="flex items-center gap-12">
          <div className="flex items-center gap-2">
            <img src={logo} alt="CoinPayments" className="h-10" />
          </div>
          <div className="h-8 border-l border-gray-500"></div>
          <div>
            <img src={logo2} alt="Kick Sauber Partner" className="h-12" />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-xs text-gray-400 mt-6 leading-relaxed">
        <div className="text-xs text-gray-400 mt-6 leading-relaxed flex items-center gap-3">
          <img src={iso} alt="ISO certified" className="h-12" />
          <p>
            UAB Star Ventures, the COINPAYMENTS operating entity in the EU is
            certified to ISO/IEC 27001:2022 Information Security Management
            System (ISMS)
          </p>
        </div>

        <p className="mt-2">
          © 2013–2025 CoinPayments Inc. All Rights Reserved. Custodial wallet
          services and other virtual asset services provided by UAB Star
          Ventures, PaidInSatoshi Inc. or their partners. UAB Star Ventures,
          Lvivo str. 25-104, Vilnius LT-09320, Lithuania,
          <a href="mailto:contact@uabsv.com" className="text-blue-400 ml-1">
            contact@uabsv.com
          </a>{" "}
          PaidInSatoshi Inc., Bloc Office Hub, Fifth Floor, Santa Maria Business
          District, Panama City, the Republic of Panama.
          <a
            href="mailto:contact@paidinsatoshi.com"
            className="text-blue-400 ml-1"
          >
            contact@paidinsatoshi.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
