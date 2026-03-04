import React, { useState } from "react";
import data from "../maincontext.json";

const NewestQuestion = () => {
  const [activeSection, setActiveSection] = useState("newest");
  const questions = data["newest"];
  return (
    <div className="mb-4 mt-8">
      {/* Row 1 */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-gray-800">
          Newest Questions
        </h1>
        <button
          className="bg-[#1976D2] text-white rounded-md 
         px-2 py-2 mr-3 text-sm hover:bg-[#1565C0]"
        >
          Ask Question
        </button>
      </div>

      {/* Row 2 */}
      <div className="flex items-center justify-between pb-4">
        <p className="text-gray-700 text-lg">24,172,760 questions</p>

        <div className="flex items-center gap-2 mr-3">
          <div className="flex border border-gray-400 rounded-md overflow-hidden text-[12px]">
            <button
              onClick={() => setActiveSection("newest")}
              className={`px-3 py-1.5 ${activeSection === "newest" ? "bg-gray-200 font-medium" : ""}`}
            >
              Newest
            </button>

            <button
              onClick={() => setActiveSection("active")}
              className={`px-3 py-1.5 ${activeSection === "active" ? "bg-gray-200 font-medium" : ""}`}
            >
              Active
            </button>

            <button
              onClick={() => setActiveSection("bountied")}
              className={`px-3 py-1.5 flex items-center ${activeSection === "bountied" ? "bg-gray-200 font-medium" : ""}`}
            >
              <span className="mr-1">Bountied</span>
              <span
                className="bg-[#155CA2] text-white text-[11px]
               px-1.5 py-0.5 rounded"
              >
                11
              </span>
            </button>

            <button
              onClick={() => setActiveSection("unanswered")}
              className={`px-3 py-1.5 ${activeSection === "unanswered" ? "bg-gray-200 font-medium" : ""}`}
            >
              Unanswered
            </button>

            <button className="px-3 py-1.5 pr-5">More ▼</button>
          </div>

          <button
            className="border border-blue-500 text-blue-500 px-2 
          py-2 ml-2 rounded-md hover:bg-blue-50 flex items-center gap-1 text-sm"
          >
            ☰ Filter
          </button>
        </div>
      </div>

      {/* Questions Render */}
      {questions.map((question) => (
        <div
          key={question.id}
          className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans"
        >
          <div className="flex flex-col items-end w-20 shrink-0 gap-1.5 pt-1">
            <p className="text-gray-700 text-sm">{question.votes} votes</p>
            <p className="text-gray-500 text-sm">{question.answers} answers</p>
            <p className="text-gray-500 text-sm">{question.views} views</p>
          </div>

          <div className="flex flex-col gap-2 flex-1">
            <a
              href="#"
              className="text-[#0074cc] hover:text-[#0095ff] text-[17px]"
            >
              {question.title}
            </a>

            <p className="text-sm text-gray-700 line-clamp-2">
              {question.description}
            </p>

            <div className="flex flex-row gap-1 mt-1 flex-wrap">
              {question.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewestQuestion;
