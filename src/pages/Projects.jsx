import React, { useEffect, useRef, useState } from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  const [currentTitle, setCurrentTitle] = useState('HTML, CSS & JAVASCRIPT')

  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]

  const titles = [
    'HTML, CSS & JAVASCRIPT',
    'REACT & TAILWIND',
    'NEXT, TAILWIND & MONGODB'
  ]

  const projectsData = [
    [
      { title: 'EcoTek Clone', img: 'Project1.png', link: 'https://ecotek-clone.netlify.app'},
      { title: 'E-Commerce', img:'Project2.png', link: 'https://chickenonfloor.github.io/Javascript/ECommerce/'},
      { title: 'Receipe Finder', img: 'Project3.png', link: 'https://recipe-finder-beta-pink.vercel.app'},
      { title: 'JS Project 1', img: 'Project.png', link: '#'},
    ],
    [
      { title: 'ToDo App', img: 'React1.png', link: 'https://todolist-localstorage09.netlify.app'},
      { title: 'Portfolio', img: 'React2.png', link: 'https://portfolio-rosy-ten-45.vercel.app'},
      { title: 'Tailwind Site 1', img: 'Project.png', link: '#'},
      { title: 'Tailwind Site 2', img: 'Project.png', link: '#'},
    ],
    [
      { title: 'Node API 1', img: 'Project.png', link: '#'},
      { title: 'Mongo Dashboard', img: 'Project.png', link: '#'},
      { title: 'Express App', img: 'Project.png', link: '#'},
      { title: 'Backend Admin', img: 'Project.png', link: '#'},
    ]
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
