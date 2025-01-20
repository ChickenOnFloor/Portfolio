import { useEffect } from 'react';
import Nav from './components/Nav'
import gsap from 'gsap'
import {useGSAP} from '@gsap/react'
import ScrollTrigger from "gsap/ScrollTrigger";
import walker from '/assets/images/walker1.jpg'
import {Images} from './constants/images'
import Lettering from './functions/lettering.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
gsap.registerPlugin(ScrollTrigger)
export default function App() {
  useGSAP(() => {
    gsap.to(".arrow", {
      y: 20,
      repeat: -1,      // Repeat twice (total 3 cycles including the initial animation)
      yoyo: true,
    })
    var tl = gsap.timeline({scrollTrigger:{
      trigger:".main-1",
      start:"30% 50%",
      end:"98% 50%",
      scrub:2,
      pin:true,
  }});
  tl
  .to(".text", {
    top: "2%"
  })
  .to(".card-one",{
      top: "6%",
  },'a')
  .to(".card-two",{
      top: "80%"
  },'a')
  .to(".card-two",{
      top: "9.5%"
  },'b')
  .to(".card-one",{
      width: "75%",
      height: "75vh"
  },'b')
  
  var tl2 = gsap.timeline({scrollTrigger: {
    trigger:".main-1",
    start: window.innerWidth < 768 ? "-1.1% top" : "30.005% 50%",
    end: window.innerWidth < 768 ? "bottom bottom" : "160% 50%",
    scrub:1,
    markers: true,
    pin:true,
  }})
  tl2
  .to(".abt-split span", {
    color: "black",
    stagger: .1
  }, 'c')
  .to(".abt-img", {
    filter: "grayscale(0%)",
    stagger: 1
  }, 'd')
  }, [])

  return (
    <div className="main font-ProductSans">
      <div className="main-1 gap-[10vh]  w-full min-h-[160vh]">
        <div className="text flex justify-center">
          <h1 className="absolute w-full text-[3vw] text-center font-bold">Scroll Down</h1>
          <div className='arrow absolute top-[2%] md:top-[6%] border border-black px-[1vw] py-[0.7vw] rounded-full text-[.8vw]'><FontAwesomeIcon icon={faArrowDown}/></div>
        </div>
        <div className="cards card-one absolute top-[130%] left-[50%] transform translate-x-[-50%] tranlate-y-[50%] border rounded-2xl shadow-2xl w-[80%] h-[80vh] bg-white p-2">
          <Nav />
          <div className='hero  flex flex-col justify-center items-center md:flex-row md:justify-start text-center md:text-start w-full max-w-[80%] m-auto h-[calc(100%-3rem)] gap-[1vw]'>
            <div className="name flex justify-center flex-col w-full md:w-[50%] order-1 md:order-none ">
              <h1 className='text-[3vw] md:text-[1.8vw] font-semibold w-full'>Muhammad Jawwad Siddique</h1>
              <h1 className='md:text-[2.5vw] font-semibold'>I'm a FrontEnd Developer</h1>
            </div>
            <div className="img flex justify-center items-center w-full md:w-[50%]">
              <img className="w-[30vw] h-[30vw] md:w-[12vw] md:h-[12vw] object-cover rounded-full" src={walker} alt="" />
            </div>
          </div>
        </div>
        <div className="cards card-two flex flex-col justify-center items-center gap-[2vw] top-[230%] absolute left-[50%] transform translate-x-[-50%] tranlate-y-[50%] border rounded-2xl shadow-2xl w-[80%] h-[80vh] bg-white">
            <div className='about-text w-[60%] text-center flex justify-center items-center flex-col gap-[1vw]'>
              <h1 className='text-[6vw] md:text-[2.5vw] font-semibold'>About</h1>
              <h1 className='text-[3vw] md:text-[1.2vw] abt-text text-gray-300'><Lettering text="Hi! I'm a Front-End Web Developer passionate about creating responsive and user-friendly web interfaces. Skilled in HTML, CSS, JavaScript, React, and Tailwind CSS, I focus on developing dynamic, optimized, and functional web applications. I’m driven to deliver innovative solutions and exceptional results. Let’s build something amazing!" className="abt-split"/></h1>
            </div>
            <div className='about-img flex gap-[1vw]'>
              <div className='abt-img flex justify-center items-center shadow-xl border p-[.2vw] rounded-[.4vw] grayscale'><img className="w-[12vw] md:w-[4vw]" src={Images.html} alt="" /></div>
              <div className='abt-img flex justify-center items-center shadow-xl border p-[.2vw] rounded-[.4vw] grayscale'><img className="w-[12vw] md:w-[4vw]" src={Images.css} alt="" /></div>
              <div className='abt-img flex justify-center items-center shadow-xl border p-[.2vw] rounded-[.4vw] grayscale'><img className="w-[12vw] md:w-[4vw]" src={Images.js} alt="" /></div>
              <div className='abt-img flex justify-center items-center shadow-xl border p-[.2vw] rounded-[.4vw] grayscale'><img className="w-[12vw] md:w-[4vw]" src={Images.react} alt="" /></div>
              <div className='abt-img flex justify-center items-center shadow-xl border p-[.2vw] rounded-[.4vw] grayscale'><img className="w-[12vw] md:w-[4vw]" src={Images.tailwind} alt="" /></div>
            </div>
        </div>
      </div>

    </div>
  )
}