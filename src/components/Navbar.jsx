import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import {useGSAP} from '@gsap/react'
import {gsap} from 'gsap'
const Navbar = () => {
  const navigators = document.querySelectorAll('.navigator')
  navigators.forEach(element => {
    let animation = gsap.to(element, {
      paused: true,
      rotation: -20,
      duration: .5
    })
    element.addEventListener('mouseenter', ()=> animation.play())
    element.addEventListener('mouseleave', ()=> animation.reverse())
  })

  useGSAP(()=>{
      const tl = gsap.timeline()
      
      tl.from('.brand', {
        y:-50,
        opacity: 0,
        duration: 1
      })
      tl.from('.navigator', {
        y: -50,
        opacity: 0,
        duration: .5,
        stagger:.2
      })
    })
  return (
    <div className='navbar flex absolute justify-between items-center w-full h-16 px-8 golos border-b-2 max-w-[1920px]'>
      <a href="#" className='brand'><h1 className='text-black text-3xl font-bold cursor-pointer '>Portfolio.</h1></a>
      <ul className='hidden md:flex gap-5 justify-around items-center'>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="#Home">Home</a></li>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="#About">About</a></li>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="#Project">Projects</a></li>
        <li className='navigator py-2 px-4 rounded-md text-black text-lg'><a href="#Contact">Contact</a></li>
      </ul>
      <ul className='flex items-center text-white text-xl sm:gap-5'>
        <li className='navigator text-black flex justify-center items-center hover:text-[#0866FF] hover:bg-white rounded-full p-1 hover:mb-2'><a href="https://www.facebook.com/muhammad.jawwad.71066"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li className='navigator text-black flex justify-center items-center hover:text-[#0866FF] hover:bg-white rounded-full p-1 hover:mb-2'><a href="https://www.linkedin.com/in/muhammad-jawwad-siddique-5b61ab257/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li className='navigator text-black flex justify-center items-center hover:text-black hover:bg-white rounded-full p-1 hover:mb-2'><a href="https://github.com/ChickenOnFloor" target='_blank'><FontAwesomeIcon icon={faGithub} /></a></li>
      </ul>
      
    </div>
  )
}

export default Navbar