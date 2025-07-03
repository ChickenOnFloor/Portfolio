import React from 'react'
import Navbar from '../components/Navbar'
const Hero = () => {
  return (
    <div className='w-full h-screen bg-[whitesmoke]'>
        <Navbar />
        <div className='h-full flex justify-center items-center flex-col gap-12'>
            <div className='w-48 h-48 md:w-54 md:h-54 lg:w-62 lg:h-62 overflow-hidden rounded-full object-center '>
                <img className="w-full h-full object-contain scale-200" src="Picture.jpg" alt="" />
            </div>
            <div className='uppercase font-bold text-center flex flex-col gap-4 md:gap-6 lg:gap-8'>
                <h1 className='text-3xl md:text-3xl lg:text-5xl'>Muhammad Jawwad Siddique</h1>
                <h1 className='text-lg md:text-xl lg:text-3xl'>I am a Frontend Web Developer</h1>
                <ul>
                  <li><img src="" alt="" /></li>
                  <li><img src="" alt="" /></li>
                  <li><img src="" alt="" /></li>
                  <li><img src="" alt="" /></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero