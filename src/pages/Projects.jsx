import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';

const Projects = () => {
    useGSAP(()=>{
        const tl = gsap.timeline()
        tl.from('.project', {
            scrollTrigger:{
                trigger: '.project_parent',
                start: "-100%",
                end: "top",
                scrub: true,
            },
            x: -1000,
        })
        tl.from('.pj', {
            scrollTrigger: {
                trigger: '.project_parent',
                start: "-100%",
                end: "top",
                scrub: true
            },
           y:300,
           opacity: 0,
           stagger: .2
        })
    })
  return (
    <div className='project_parent bg-white w-full h-screen'>
        <div className='flex justify-center items-center h-16 sm:h-24 md:h-32 bg-black overflow-x-hidden'>
            <h1 className='project text-center text-4xl sm:text-6xl md:text-7xl text-white'>PROJECTS</h1>
        </div>
        <div className='flex flex-col gap-5 pj_con w-full h-6/6 pt-4'>
            <a href=""><h1 className='pj text-[5vh] sm:text-[4vw] border-t-2 border-b-2 border-black hover:bg-black hover:text-white'>PROJECT 1</h1></a>
            <a href=""><h1 className='pj text-[5vh] sm:text-[4vw] border-t-2 border-b-2 border-black hover:bg-black hover:text-white'>PROJECT 2</h1></a>
            <a href=""><h1 className='pj text-[5vh] sm:text-[4vw] border-t-2 border-b-2 border-black hover:bg-black hover:text-white'>PROJECT 3</h1></a>
            <a href=""><h1 className='pj text-[5vh] sm:text-[4vw] border-t-2 border-b-2 border-black hover:bg-black hover:text-white'>PROJECT 4</h1></a>
            <a href=""><h1 className='pj text-[5vh] sm:text-[4vw] border-t-2 border-b-2 border-black hover:bg-black hover:text-white'>PROJECT 5</h1></a>
        </div>
    </div>
  )
}

export default Projects