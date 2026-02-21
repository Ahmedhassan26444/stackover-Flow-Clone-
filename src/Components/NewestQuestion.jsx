import React from 'react'

const NewestQuestion = () => {
  return (
    <div className=' mb-4'>
      {/* Row 1: Title + Ask Question */}
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-2xl font-semibold text-gray-800'>
          Newest Questions
        </h1>
        <button className='bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-[#0074cc]'>
          Ask Question
        </button>
      </div>

      {/* Row 2: Count + Tabs + Filter */}
      <div className="flex items-center justify-between pb-4">
        <p className="text-gray-700 text-lg">
          24,172,760 questions
        </p>
        <div className="flex items-center gap-2">
          <div className="flex border rounded-md overflow-hidden text-sm">
            <button className="px-3 py-1.5 bg-gray-200 font-normal">
              Newest
            </button>
            <button className="px-3 py-1.5">
              Active
            </button>
            <button className="px-3 py-1.5 flex flex-row items-center leading-tight">
              <span className='mr-1'>Bountied</span>
              <span className="bg-[#155CA2] text-white text-[11px] px-1.5 py-0.5
               rounded">11</span>
            </button>
            <button className="px-3 py-1.5">
              Unanswered
            </button>
            <button className="px-3 py-1.5">
              More ▼
            </button>
          </div>
          <button className="border border-blue-500 text-blue-500 px-2 py-2
           rounded-md hover:bg-blue-50 flex items-center  gap-1 text-sm">
            ☰ Filter
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewestQuestion
