import React from 'react'
import Logo from '../assets/Logo.png'
import { Search } from 'lucide-react'

const Header = () => {
  return (
    <div className = ' header flex flex-row items-center mb-11' >
        <img src= {Logo} alt=" logo png" className='h-12' />
        <div className='flex gap-1 items-center   '>
            <a href="#" className=' hover:bg-gray-200 rounded-full px-3 py-2 text-[16px] text-shadow-gray-600 font-light' >About</a>
            <a href="#" className=' hover:bg-gray-200 rounded-full px-3 py-2 text-[16px] text-shadow-gray-600 font-light'>Products</a>
            <a href="#" className=' hover:bg-gray-200 rounded-full px-3 py-2 text-[16px] text-shadow-gray-600 font-light'>For Teams</a>
            <div className='pt-2 mr-2 relative'>
              <Search size={16} className="absolute left-3 top-5 text-gray-400" />
              <input type="text"
              placeholder='Search...'
              className='bg-white border border-gray-500 rounded-md 
              py-2 pl-10 pr-3 text-[16px] w-197 h-8focus:outline-none
              focus:border-blue-400 focus:ring-1 focus:ring-blue-400"'
              />
            </div>
            <div className=' h-8 gap-1'>
              <button className=' items-center p-2 rounded-md  hover:bg-[#D6E8FA] border focus:ring-blue-400  text-blue-600'>
                Login-in
              </button>
            </div>
            <div className=' h-8 gap-1'>
              <button className='bg-blue-500 text-neutral-50 rounded-md 
               items-center p-2.5 ' > 
                Sigin-Up
              </button>
            </div>
        </div>
    </div>
  )
}

export default Header
