import React from 'react'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
const App = () => {
  return (
    <>
      <div className='monospaced1 w-full flex justify-center items-center'>
        <div>
          <Hero />
          <Projects/>
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App