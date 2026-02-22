import React from 'react'
import { 
  Home, MessageCircleQuestion, Bot, Tag, Mountain, Plus, 
  MessageSquare, FileText, Users, Building2, 
  BarChart2, Paperclip 
} from 'lucide-react';

const Navbar = () => {

  return (

    <div className='flex flex-col w-50 pt-2 h-screen overflow-y-auto  border-r border-gray-200
    bg-white'>

      <a href="#" className='pl-1 py-2 text-sm hover:bg-gray-100 flex items-center gap-3'><Home className="w-5 h-5" />Home</a>
      <a href="#" className='pl-1 py-2 text-sm font-bold bg-gray-100 flex items-center gap-3'><MessageCircleQuestion className="w-5 h-5" />Questions</a>
      <a href="#" className='pl-1 py-2 text-sm hover:bg-gray-100 flex items-center gap-3'><Bot className="w-5 h-5" />AI Assist</a>
      <a href="#" className='pl-1 py-2 text-sm hover:bg-gray-100 flex items-center gap-3'><Tag className="w-5 h-5" />Tags</a>
      <a href="#" className='pl-1 py-2 text-sm hover:bg-gray-100 mt-4 flex items-center gap-3'><Mountain className="w-5 h-5" />Challenges</a>
      <a href="#" className='pl-1 py-2 mt-4 text-sm hover:bg-gray-100 flex items-center gap-3'><MessageSquare className="w-5 h-5" />Chat</a>
      <a href="#" className='pl-1 py-2 text-sm hover:bg-gray-100 flex items-center gap-3'><FileText className="w-5 h-5" />Articles</a>
      <a href="#" className='pl-1 py-2 text-sm hover:bg-gray-100 flex items-center gap-3'><Users className="w-5 h-5" />Users</a>
      <a href="#" className='pl-1 py-2 text-sm hover:bg-gray-100 mt-4 flex items-center gap-3'><Building2 className="w-5 h-5" />Companies</a>
      
      <div className='  pl-2 mt-4 py-2 justify-between flex items-center'>
        <h1  className=" text-[15px]  text-sm font-bold">
          Collectives
        </h1>
        <div  className='pr-4'>
          <Plus className="w-4 h-4 text-gray-600" />
        </div>
      </div>
      <div className='text-sm text-gray-600 text-[12px] pl-2'>
        <p>
          Communities for your favorite technologies <br />
          <a className='hover:text-gray-950 font-bold underline' href="#">Explore all Collectives</a>
        </p>
      </div>
      <div className='mt-4 pt-4 font-bold pl-2 text-[13px]'>
        <h1>
          Stack Internal
        </h1>
        
      </div>
      <div className='flex fle-row gap-3 pt-4 pl-1'>
        <FileText className='h-5' />
        <Tag className='h-5'/>
        <MessageSquare className='h-5'/>
        <BarChart2  className='h-5' />
        <Paperclip className='h-5' />
      </div>
      <div className='text-sm pt-4 text-gray-600 text-[11px] pl-2'>
        <p>
          Stack Overflow for Teams is now called <strong>Stack Internal</strong>.
          Bring the best of human thought and AI automation together 
          at your work.
        </p>
      </div>
      <div className='pt-2 items-center text-center'>
        <button className='bg-blue-500 px-6  text-neutral-50 rounded-md 
        items-center hover:bg-[#0074cc] '>
          Try For Free
        </button>
      </div>
      <div className='items-center text-center mb-8  '>
        <button className='text-gray-600 text-[12px] hover:border hover:border-gray-400 rounded-md px-8 py-1 mt-2 '>
        Learn More
        </button>
      </div>
    </div>

  )

}

export default Navbar
