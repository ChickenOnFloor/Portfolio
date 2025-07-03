import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full h-16 bg-[whitesmoke] shadow-lg shadow-gray-400 px-8 md:fixed z-100'>
        <div className="logo">
            <h1 className='text-3xl font-bold'>PORTFOLIO.</h1>
        </div>
        <div className='bg-gray-200 w-8 h-8 flex justify-center items-center rounded border-gray-300 border md:hidden'>
            <FontAwesomeIcon icon={faBars} className='text-xl'/>
        </div>
        <div className="hidden gap-2 nav-items text-xl font-bold md:flex">
            <div className='px-4 py-1 bg-gray-200 rounded flex items-center justify-center border-gray-300 border hover:bg-gray-300 cursor-pointer transition-all'>Home</div>
            <div className='px-4 py-1 bg-gray-200 rounded flex items-center justify-center border-gray-300 border hover:bg-gray-300 cursor-pointer transition-all'>Projects</div>
            <div className='px-4 py-1 bg-gray-200 rounded flex items-center justify-center border-gray-300 border hover:bg-gray-300 cursor-pointer transition-all'>Contact</div>
        </div>
    </div>
  )
}

export default Navbar