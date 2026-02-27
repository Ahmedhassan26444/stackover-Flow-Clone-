import React from "react";
import { Pencil, MessageSquare, BookMarked, Shield } from "lucide-react";
import Microsoft from "../assets/microsoft.png";
import PHP from "../assets/php.png";
import NLP from "../assets/nlp.png";

const hotQuestions = [
  { icon: "https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico", text: "Replace parent or child of a symbol" },
  { icon: "https://cdn.sstatic.net/Sites/politics/Img/favicon.ico", text: "Is Charlie Kirk and conservatives in general against condoms?" },
  { icon: "https://cdn.sstatic.net/Sites/unix/Img/favicon.ico", text: "How to simulate a smaller resolution on a bigger display with xrandr considering DVI limitations?" },
  { icon: "https://cdn.sstatic.net/Sites/fitness/Img/favicon.ico", text: "Are adjustable dumbbells similar to non-adjustable lifting weights?" },
  { icon: "https://cdn.sstatic.net/Sites/serverfault/Img/favicon.ico", text: "How to issue SSL certificate with HTTP probe when well-known folder can't be created?" },
  { icon: "https://cdn.sstatic.net/Sites/history/Img/favicon.ico", text: 'What did it mean when a 19th century UK man was a "blocker"' },
  { icon: "https://cdn.sstatic.net/Sites/math/Img/favicon.ico", text: "Summary of the current progress on Navier-Stokes existence and smoothness problem" },
  { icon: "https://cdn.sstatic.net/Sites/physics/Img/favicon.ico", text: "How hard is it for a meter-scale device to measure tidal force" },
  { icon: "https://cdn.sstatic.net/Sites/blender/Img/favicon.ico", text: "Birail extrusion of a curve with Curve Tools" },
  { icon: "https://cdn.sstatic.net/Sites/biology/Img/favicon.ico", text: "Does being bipedal set a hard limit on the size of herbivores?" },
  { icon: "https://cdn.sstatic.net/Sites/chemistry/Img/favicon.ico", text: "What do the temperatures in a VLE-diagram represent and does the region between the curves have meaning?" },
  { icon: "https://cdn.sstatic.net/Sites/math/Img/favicon.ico", text: "What is the angle? (five circles in a triangle)" },
];

const Rightwidgets = () => {
  return (
    <div className="w-80 ml-6 mr-6 mt-8">
      
      {/* Card 1 - Overflow Blog */}
      <div className="bg-[#FDF7E7] border border-[#f1e5bc] rounded-sm p-4 
      w-72">
        <h1 className="font-bold mb-2">The Overflow Blog</h1>
        <div className="flex items-start gap-2 mb-4">
          <Pencil size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">Dogfood so nutritious it’s building the future of SDLCs</p>
        </div>
        <div className="flex items-start gap-2 mb-4">
          <Pencil size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">Your sneak peek at the redesigned Stack Overflow</p>
        </div>
        <hr className="border-t border-[#bba354] my-4" />
        <h1 className="font-bold mb-2">Featured on Meta</h1>
        <div className="flex items-start gap-2 mb-2">
          <BookMarked size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">Logo updates to Stack Overflow's visual identity</p>
        </div>
        <div className="flex items-start gap-2 mb-2">
          <Shield size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">Policy: Generative AI (e.g., ChatGPT) is banned</p>
        </div>
        <div className="flex items-start gap-2">
          <Shield size={14} className="mt-1 shrink-0 text-gray-600" />
          <p className="text-sm text-gray-600">Starting February 24, 2026: check out our new site design</p>
        </div>
      </div>

      {/* Card 2 - Collectives */}
      <div className="mt-2 w-72 bg-white border border-[#0702021a] rounded-sm p-4 ">
        <div className="flex flex-row justify-between">
          <h1 className="font-semibold">Collectives</h1>
          <a className="text-[#604B8F]" href="#">see all</a>
        </div>

        <div className="mt-3 flex justify-between items-start">
          <div className="flex flex-row">
            <img className="w-10 h-8 pl-2" src={Microsoft} alt="Microsoft Logo"/>
            <div className="pl-3">
              <h1>Microsoft Azure</h1>
              <p className="text-sm text-gray-600">30k Members</p>
            </div>
          </div>
          <button className="border text-blue-400 hover:bg-blue-100 border-blue-500 px-3 py-2 text-sm rounded">Join</button>
        </div>
        <p className="text-[14px] pl-1 text-gray-600">
          A collective for developers to engage, share, and learn about Microsoft Azure's open-
        </p>

        <div className="mt-6 flex justify-between items-start">
          <div className="flex flex-row">
            <img className="w-12 h-9 pl-1" src={PHP} alt="PHP Logo"/>
            <div className="pl-3">
              <h1>PHP</h1>
              <p className="text-sm text-gray-600">17k Members</p>
            </div>
          </div>
          <button className="border text-blue-400 hover:bg-blue-100 border-blue-500 px-3 py-2 text-sm rounded">Join</button>
        </div>
        <p className="text-[14px] pl-1 text-gray-600">
          A collective where developers working with PHP can learn and connect about the open
        </p>

        <div className="mt-6 flex justify-between items-start">
          <div className="flex flex-row">
            <img className="w-12 h-9 pl-3" src={NLP} alt="NLP Logo"/>
            <div className="pl-3">
              <h1>NlP</h1>
              <p className="text-sm text-gray-600">13k Members</p>
            </div>
          </div>
          <button className="border text-blue-400 hover:bg-blue-100 border-blue-500 px-3 py-2 text-sm rounded">Join</button>
        </div>
        <p className="text-[14px] pl-1 text-gray-600">
          A collective focused on NLP (natural language processing), the transformation or extraction
        </p>
      </div>

      {/* Card 3 - Hot Network Questions */}
      <div className="mt-67 mb-10 w-72 bg-white border border-[#0702021a] rounded-sm">
        <div className="px-4 py-3 border-b border-gray-200">
          <h3 className="text-[15px] font-normal text-gray-800">Hot Network Questions</h3>
        </div>
        <ul className="px-4 py-2">
          {hotQuestions.map((q, i) => (
            <li key={i} className="flex items-start gap-2 py-2">
              <img
                src={q.icon}
                alt="site icon"
                className="w-4 h-4 mt-0.5 shrink-0 rounded-sm"
              />
              <a href="#" className="text-[13px] text-blue-600 hover:text-blue-800 leading-snug">
                {q.text}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-4 py-3 border-t border-gray-200">
          <a href="#" className="text-[13px] text-blue-600 hover:text-blue-800">
            more hot questions
          </a>
        </div>
      </div>

    </div>
  );
};

export default Rightwidgets;