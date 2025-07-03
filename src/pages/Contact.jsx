import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
const Contact = () => {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center p-4 gap-4 bg-[whitesmoke]'>
        <h1 className='text-4xl font-bold bg-gray-200 py-2 px-4 rounded-lg border border-gray-300'>CONTACT ME</h1>
        <div className='flex flex-col justify-center items-center gap-2 bg-gray-100 w-full max-w-[700px] h-full max-h-[400px] border border-gray-300 rounded shadow-lg shadow-gray-400 p-4'>
            <input type="text" className='w-full h-12 bg-white rounded-lg border border-gray-300 pl-4 outline-none focus:border-gray-400' placeholder='Enter Your Name' required/>
            <input type="email" className='w-full h-12 bg-white rounded-lg border border-gray-300 pl-4 outline-none focus:border-gray-400' placeholder='Enter Your Email' required/>
            <textarea placeholder='Enter Your Message Here...' className='flex-1 w-full pt-2 pl-4 bg-white border border-gray-300 rounded-lg outline-none focus:border-gray-400'></textarea>
            <button className='group bg-gray-200 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-300 cursor-pointer'>SEND EMAIL <FontAwesomeIcon icon={faArrowRight} className='text-xl group-hover:translate-x-1 transition-all'/></button>
        </div>
    </div>
  )
}

export default Contact