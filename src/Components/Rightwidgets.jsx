import React from "react";
import { Pencil, MessageSquare } from "lucide-react";

const Rightwidgets = () => {
  return (
    <div className="w-80 ml-6 ">
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
    </div>
  );
};

export default Rightwidgets;