import React from 'react'
import Navbar from '../components/Navbar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { techImages } from '../constants/constants'
const Hero = () => {
  useGSAP(()=> {
    const tl = gsap.timeline()
    tl.from('.anim', {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: .5
    }).from('.anim2', {
      opacity: 0,
      y: -100,
      duration: 1,
      stagger: .2
    })
  })
  return (
    <div className='w-full h-screen bg-[whitesmoke]'>
        <Navbar />
        <div className='h-full w-full flex justify-center items-center flex-col gap-12'>
            <div className='w-48 h-48 md:w-54 md:h-54 lg:w-62 lg:h-62 overflow-hidden rounded-full object-center anim'>
                <img className="w-full h-full object-contain scale-200" src="Images/Picture.jpg" alt="" />
            </div>
            <div className='uppercase font-bold text-center flex flex-col gap-4 md:gap-6 lg:gap-8'>
                <h1 className='text-3xl md:text-3xl lg:text-5xl anim'>Muhammad Jawwad Siddique</h1>
                <h1 className='text-lg md:text-xl lg:text-3xl anim'>I am a Frontend Web Developer</h1>
                <ul className='flex flex-wrap gap-4 justify-center p-2'>
                  {
                    Object.values(techImages).map((data, index) => {
                      return <li key={index}><img src={data} alt="" className='w-8 md:w-10 lg:w-12 anim2'/></li>
                    })
                  }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Hero