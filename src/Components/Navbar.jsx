import React from 'react'
import { Home, MessageCircleQuestion, Bot,Tag, Mountain, Plus ,
MessageSquare, FileText, Users, Building2 } from 'lucide-react'

const Navbar = () => {

  return (

    <div className='flex flex-col w-38 pt-2 h-screen overflow-y-auto border-r border-gray-200
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
          Communities for your favorite technologies
        </p>
      </div>
    </div>

  )

}

export default Navbar
