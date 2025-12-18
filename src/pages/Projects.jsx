import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import { titles, projectsData } from '../constants/constants'
const Projects = () => {
  const [currentTitle, setCurrentTitle] = useState('(FullStack)')

  const sectionRefs = [
    useRef(null),
    useRef(null),
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = sectionRefs.findIndex(ref => ref.current === entry.target)
            if (index !== -1) {
              setCurrentTitle(titles[index])
            }
          }
        })
      },
      {
        threshold: 0.5
      }
    )

    sectionRefs.forEach(ref => {
      if (ref.current) observer.observe(ref.current)
    })

    return () => {
      sectionRefs.forEach(ref => {
        if (ref.current) observer.unobserve(ref.current)
      })
    }
  }, [])

  return (
    <div className="w-full relative bg-[whitesmoke]">
      <div className='w-full flex flex-col-reverse md:flex-row'>
        <div className='w-full md:w-[50%] flex flex-col'>
          {projectsData.map((section, i) => (
            <div
              key={i}
              ref={sectionRefs[i]}
              className='w-full h-screen flex justify-center items-center cursor-pointer'
            >
              <div className='w-full flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8'>
                {section.map((project, j) => (
                  <ProjectCard key={j} title={project.title} img={project.img} link={project.link}/>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='w-full md:w-[50%] h-24 md:h-screen sticky top-0 bg-gray-200 flex justify-center items-center z-10'>
          <h1 className='text-2xl md:text-5xl font-bold text-center transition-all duration-500'>
            {currentTitle}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Projects
