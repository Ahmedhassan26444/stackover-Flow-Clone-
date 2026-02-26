import React from "react";

const MainContent = () => {
  return (
    <div>
      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">-1 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            6 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            AlarmManager with BroadcastReceiver not firing notifications when
            app is swiped away (Android 13+, Jetpack Compose)
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            Problem Description I am building a nutrition tracker app where
            users should receive a reminder notification at specific times
            (e.g., 15:00 and 20:00) if they haven't logged any data for the
            current ...
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {[
              "android",
              "kotlin",
              "push-notification",
              "android-jetpack-compose",
            ].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            7 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            Code based implementation of an oData V4-Service throws not
            implemented when using $groupby
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            Ich created an oData V4 Service last week in our SAP-System and i
            want to implement the groubBy Argument. I tried it like
            this:?$top=5&$apply=groupby((Status),aggregate($count as COUNT))
            just for ...
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["Odata", " abab"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            6 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            Activate and use 2FA with asp.net core
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            I want to use 2FA on an asp.net core project. I can activate it with
            scanning QR code (image "Activate 2FA") on Google authenticator and
            then i put the 6 digit code and it works. Then I'm ...
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {[".net-core", " google-authenticator", "google-2fa"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            14 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            How do I solve `malloc(): corrupted top size`?
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            I was trying to make a symbolic table using C. Below is the excerpt
            of the code
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["c", "malloc"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            3 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            FULL OUTER missing from previous year metric
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            I have a table with a date dimension (month/year), other grouping
            dimensions, and a metric value. To compare with the previous year, I
            created a blendas suggested in this post: how to show value of ..
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["date-comparsion", "full-outer-join"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            15 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            What's the cause of data loss when synchronizing data using Oracle
            GoldenGate between two tables with columns in different data types?
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            Given two Oracle tables, table_a and table_b, table_a contains one
            of the columns named ref_no_a with data type varchar2(100), table_b
            contains one of the columns named ref_no_b with data type ...
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["truncation", "data-loss", "varchar2", "oracle-golden-gate"].map(
              (tag) => (
                <span
                  key={tag}
                  className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            23 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            Cannot link custom static library [duplicate]
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            I have three C++ files in the same folder workspace dir in Linux:
            functions hpp pragma once void print const char str void println
            const char str functions.cpp implementation of
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["c++", "static-libraries", "libraries"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            18 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            Code based implementation of an oData V4-Service throws not
            implemented when using $groupby
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            Ich created an oData V4 Service last week in our SAP-System and i
            want to implement the groubBy Argument. I tried it like
            this:?$top=5&$apply=groupby((Status),aggregate($count as COUNT))
            just for ...
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["Excel"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            10 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            Code based implementation of an oData V4-Service throws not
            implemented when using $groupby
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            Ich created an oData V4 Service last week in our SAP-System and i
            want to implement the groubBy Argument. I tried it like
            this:?$top=5&$apply=groupby((Status),aggregate($count as COUNT))
            just for ...
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["java"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-4 border-b border-gray-200 py-4 font-sans">
        {/* Left Sidebar: Stats */}
        <div className="flex flex-col items-end w-80px shrink-0 gap-1.5 pt-1">
          <p className="text-gray-700 text-sm whitespace-nowrap">0 votes</p>
          <p className="text-gray-500 text-sm whitespace-nowrap">0 answers</p>
          <p className="text-gray-500 text-sm whitespace-nowrap font-light">
            2 views
          </p>
        </div>

        {/* Right Content: Title, Description, and Tags */}
        <div className="flex flex-col gap-2">
          <a
            href="#"
            className="text-[#0074cc] hover:text-[#0095ff] text-[17px] font-normal leading-tight"
          >
            Code based implementation of an oData V4-Service throws not
            implemented when using $groupby
          </a>
          <p className="text-sm text-gray-700 leading-normal line-clamp-2">
            Ich created an oData V4 Service last week in our SAP-System and i
            want to implement the groubBy Argument. I tried it like
            this:?$top=5&$apply=groupby((Status),aggregate($count as COUNT))
            just for ...
          </p>

          {/* Tags Section */}
          <div className="flex flex-row gap-1 mt-1">
            {["java", "code.org"].map((tag) => (
              <span
                key={tag}
                className="px-1.5 py-1 bg-[#e3e6e8] text-black text-xs rounded font-medium hover:bg-[#d6d9dc] cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
