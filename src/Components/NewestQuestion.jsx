import React, { useState, useRef, useEffect } from "react";
import data from "../maincontext.json";

const options = [
  { label: "Frequent" },
  { label: "Score" },
  { label: "Trending" },
  { label: "Week" },
  { label: "Month" },
  null,
  { label: "Unanswered (my tags)", dim: true },
];

const NewestQuestion = () => {
  const [activeSection, setActiveSection] = useState("newest");
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // ✅ only change here
  const questions = data[activeSection];

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

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
          <div className="flex border border-gray-400 rounded-md overflow-visible text-[12px]">

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

            {/* More Dropdown */}
            <div className="relative" ref={ref}>
              <button
                onClick={() => setOpen((o) => !o)}
                className="px-3 py-1.5 pr-5"
              >
                More ▼
              </button>

              {open && (
                <div className="absolute left-0 mt-1 w-52 bg-white border border-gray-200 rounded shadow-lg z-50">
                  {options.map((opt, i) =>
                    opt === null ? (
                      <div key={i} className="border-t border-gray-100 my-0.5" />
                    ) : (
                      <div
                        key={opt.label}
                        className={`px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer ${
                          opt.dim ? "text-gray-400" : "text-gray-700"
                        }`}
                      >
                        {opt.label}
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

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