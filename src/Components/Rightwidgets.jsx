import React from "react";
import { Pencil, MessageSquare } from "lucide-react";
import Microsoft from "../assets/microsoft.png";
import PHP from "../assets/php.png";
import NLP from "../assets/nlp.png";

const Rightwidgets = () => {
  return (
    <div className="w-80 ml-6  mt-8">
      <div className="bg-[#FDF7E7] border border-[#f1e5bc] rounded-sm p-4">
        
        <h1 className="font-bold mb-2">
          The Overflow Blog
        </h1>

        <div className="flex items-start gap-2 mb-4">
          <Pencil size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">
            Data is the new oil, and your database is the only way to extract it
          </p>
        </div>

        <div className="flex items-start gap-2 mb-4">
          <Pencil size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">
            Defense against uploads: Q&A with OSS file scanner, pompelmi
          </p>
        </div>

        <hr className="border-t border-[#bba354] my-4" />

        <h1 className="font-bold mb-2">Featured on Meta</h1>

        <div className="flex items-start gap-2 mb-2">
          <MessageSquare size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">
            All users on Stack Exchange can now participate in chat
          </p>
        </div>

        <div className="flex items-start gap-2 mb-2">
          <MessageSquare size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">
            Logo updates to Stack Overflow's visual identity
          </p>
        </div>

        <div className="flex items-start gap-2 mb-2">
          <MessageSquare size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">
            Policy: Generative AI (e.g., ChatGPT) is banned
          </p>
        </div>

        <div className="flex items-start gap-2">
          <MessageSquare size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">
            Starting February 24, 2026: check out our new site design
          </p>
        </div>
      </div>

      {/* Collectives Card */}
      <div className="mt-2 w-80  bg-white border border-[#0702021a] 
      rounded-sm p-4">
        
        {/* Top Row */}
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold"> 
            Collectives
          </h1>
          <a className="text-[#604B8F]" href="#">
            see all
          </a>
        </div>

        {/* Microsoft */}
        <div className="mt-3 flex justify-between items-start">
          <div className="flex flex-row">
            <img className="w-10 h-8 pl-2" src={Microsoft} alt="Microsoft Logo"/>
            <div className="pl-3">
              <h1>Microsoft Azure</h1>
              <p className="text-sm text-gray-600 tex-[12px]">
                30k Members
              </p>
            </div>
          </div>

          <button className="border text-blue-400 hover:bg-blue-100 border-blue-500 px-3 py-2 text-sm rounded">
            Join
          </button>
        </div>

        <p className="text-[14px] pl-1 text-gray-600">
          A collective for developers to engage, share, and learn about Microsoft Azure's open-
        </p>

        {/* PHP */}
        <div className="mt-6 flex justify-between items-start">
          <div className="flex flex-row">
            <img className="w-12 h-9 pl-1" src={PHP} alt="PHP Logo"/>
            <div className="pl-3">
              <h1>PHP</h1>
              <p className="text-sm text-gray-600 tex-[12px]">
                17k Members
              </p>
            </div>
          </div>

          <button className="border text-blue-400  hover:bg-blue-100 border-blue-500 px-3 py-2 text-sm rounded">
            Join
          </button>
        </div>

        <p className="text-[14px] pl-1 text-gray-600">
          A collective where developers working with PHP can learn and connect about the open
        </p>

        <div className="mt-6 flex justify-between items-start">
          <div className="flex flex-row">
            <img className="w-12 h-9 pl-3" src={NLP} alt="NLP Logo"/>
            <div className="pl-3">
              <h1>NlP</h1>
              <p className="text-sm text-gray-600 tex-[12px]">
                  13k Members
              </p>
            </div>
          </div>

          <button className="border text-blue-400  hover:bg-blue-100 border-blue-500 px-3 py-2 text-sm rounded">
            Join
          </button>
        </div>

        <p className="text-[14px] pl-1 text-gray-600">
         A collective focused on NLP (natural language processing), the transformation or extraction
        </p>

      </div>
    </div>
  );
};

export default Rightwidgets;
