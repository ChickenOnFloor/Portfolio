import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap/gsap-core';
import walker from '/assets/images/walker.jpg'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(()=>{
    const tl = gsap.timeline()
    tl.from('.Name', {
      y:-50,
      opacity: 0,
      duration: 1,
      delay: 1
    })
    tl.from('.About', {
      y: 100,
      opacity: 0,
      duration: 1,
    })
  })
  return (
    <div className='hero flex justify-center items-center w-full h-screen p-10 max-md:flex-col flex-row gap-10 sm:gap-20 md:gap-10 border-b-2'>
      <div className='flex justify-center flex-col gap-6 sm:w-6/12 md:w-12/12'>
        <h1 className='Name md:text-4xl text-2xl font-bold text-center md:text-start'>M.Jawwad Siddique</h1>
        <h1 className='About text-xl text-center md:text-start'>I'm a Front-End Web Developer</h1>
      </div>
      <div className='flex justify-center items-center md:w-4/12 h-2/6 order-first md:order-last'>
        <img className="w-2/12 md:w-6/12 rounded-3xl min-w-32" src={walker} />
      </div>
    </div>
  )
}

export default Hero