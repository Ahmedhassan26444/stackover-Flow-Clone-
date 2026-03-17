import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Search } from "lucide-react";

const Header = () => {
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);

  const toggleDropdown = (e) => {
    e.preventDefault();
    setShowProductsDropdown(!showProductsDropdown);
  };

  const closeDropdown = () => {
    setShowProductsDropdown(false);
  };

  return (
    <div className="header flex flex-row items-center px-12 h-14 border-b border-gray-200 bg-white relative">
      <img src={Logo} alt="logo png" className="h-12 ml-4" />

      <div className="flex items-center flex-1">

        <a href="#" className="hover:bg-gray-100 font-extralight rounded-full px-3 py-1.5 text-[14px]">
          About
        </a>

        <div className="relative">

          <a
            href="#"
            onClick={toggleDropdown}
          className={`hover:bg-gray-100 font-extralight rounded-full px-3 py-1.5 text-[14px] ${showProductsDropdown ? "bg-orange-600 text-white" : ""}`}
>
            Products
          </a>

          {showProductsDropdown && (
            <div>
              <div className="fixed inset-0 z-40" onClick={closeDropdown} />
              <div className="absolute left-0 top-8 z-50  bg-white border border-gray-200 shadow-lg rounded-md w-56 p-4">

                <div className="mb-4">
                  <p className="font-semibold text-[13px] text-gray-800">Stack Internal</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    Implement a knowledge platform layer to power your enterprise and AI tools.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-[13px] text-gray-800">Stack Data Licensing</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    Connect to top-class technical expertise with trusted and attributed content.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-[13px] text-gray-800">Stack Ads</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    Connect your brand to the worlds most trusted technologist communities.
                  </p>
                </div>

                <div className="mb-4">
                  <p className="font-semibold text-[13px] text-gray-800">Releases</p>
                  <p className="text-[12px] text-gray-500 mt-0.5">
                    Keep up-to-date on features we add to Stack Overflow and Stack Internal.
                  </p>
                </div>

                <hr className="my-2 border-gray-200" />

                <a href="#" className="block text-[13px] text-gray-700 hover:text-blue-600 py-1">
                  About the company
                </a>
                <a href="#" className="block text-[13px] text-gray-700 hover:text-blue-600 py-1">
                  Visit the blog
                </a>

              </div>
            </div>
          )}
        </div>

        <a href="#" className="hover:bg-gray-100 font-extralight rounded-full px-3 py-1.5 text-[14px]">
          For Teams
        </a>

        <button className="flex items-center gap-2 border border-[#A6B0FF] text-[#4C59D9] px-3 py-2 rounded-md text-[13px] font-medium hover:bg-[#F1F2FF] transition mr-1">
          Try new site
          <span className="bg-[#4C59D9] text-white text-[10px] font-bold px-1 py-1 rounded">
            BETA
          </span>
        </button>

        <div className="relative flex-1 max-w-xl">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-142 h-9 border border-gray-300 rounded-md pl-10 pr-3 text-[14px] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
        </div>

        <div className="mr-7">
          <button className="mr-1 pl-2 px-3 text-center py-1.5 border border-blue-500 text-blue-600 rounded-md text-[13px] hover:bg-blue-200">
            Log in
          </button>

          <button className="px-3 py-1.5 bg-[#1976D2] text-white rounded-md text-[13px] hover:bg-[#1565C0]">
            Sign up
          </button>
        </div>

      </div>
    </div>
  );
};

export default Header;