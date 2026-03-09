import { X, Search } from "lucide-react";

const TOPICS = [
  "python", "javascript", "c#", "reactjs", "java",
  "android", "html", "flutter", "c++", "node.js",
  "typescript", "css", "r", "php", "angular",
  "next.js", "spring-boot", "machine-learning",
  "sql", "excel", "ios", "azure", "docker",
];

const Homecontent = ({ onClose }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg w-full max-w-md relative p-6">
      <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-gray-800">
        <X className="w-5 h-5" />
      </button>

      <h2 className="text-lg font-bold text-gray-900">Let's set up your homepage</h2>
      <p className="text-sm text-gray-500 mt-1 mb-4">Select a few topics you're interested in:</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {TOPICS.map((topic) => (
          <button
            key={topic}
            className="px-3 py-1.5 rounded-full border border-gray-300 bg-white text-xs font-medium text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {topic}
          </button>
        ))}
      </div>

      <p className="text-xs text-gray-500 mb-1.5">Or search from our full list:</p>
      <div className="relative mb-4">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-gray-300 bg-white text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <button className="w-full py-2.5 rounded-lg bg-blue-500 text-white font-semibold text-sm hover:bg-blue-600 transition-opacity">
        Next
      </button>

      <p className="text-center text-[11px] text-gray-400 mt-2.5">
        You'll be prompted to create an account to view your personalized homepage.
      </p>
    </div>
  );
};

export default Homecontent;