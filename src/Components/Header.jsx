import React from "react";
import Logo from "../assets/Logo.png";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <div className="header flex flex-row items-center px-12 h-14 border-b
     border-gray-200 bg-white">
      <img src={Logo} alt="logo png" className="h-12 ml-4 " />

      <div className="flex items-center flex-1">

        <a
          href="#"
          className="hover:bg-gray-100 font-extralight  rounded-full px-3 py-1.5 text-[14px]"
        >
          About
        </a>

        <a
          href="#"
          className="hover:bg-gray-100 font-extralight rounded-full px-3 py-1.5 text-[14px]"
        >
          Products
        </a>

        <a
          href="#"
          className="hover:bg-gray-100 font-extralight rounded-full px-3 py-1.5 text-[14px]"
        >
          For Teams
        </a>

        {/* Try new site button */}
        <button className="flex items-center gap-2 border
         border-[#A6B0FF] text-[#4C59D9] px-3 py-2
          rounded-md text-[13px] font-medium hover:bg-[#F1F2FF]
           transition mr-1 ">
          Try new site
          <span className="bg-[#4C59D9] text-white text-[10px]
           font-bold px-2 py-0.3 rounded">
            BETA
          </span>
        </button>

        {/* Search */}
        <div className="relative  flex-1 max-w-xl">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2
             text-gray-400"
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-142 h-9 border border-gray-300 rounded-md pl-10 pr-3 text-[14px]
              focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Log in */}
        <div className="mr-7">
          <button className=" mr-1 pl-2  px-3 text-center py-1.5 border border-blue-500 text-blue-600 rounded-md text-[13px] hover:bg-blue-200">
          Log in
        </button>

        {/* Sign up */}
        <button className=" px-3 py-1.5 bg-[#1976D2] text-white 
        rounded-md text-[13px] hover:bg-[#1565C0]"> 
          Sign up
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;