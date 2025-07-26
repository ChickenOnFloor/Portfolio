import React from 'react'
import Hero from './pages/Hero'
import Projects from './pages/Projects'
const App = () => {
  return (
    <>
      <div className='monospaced1 w-full max-w-[1920px] '>
          <Hero />
          <Projects/>
      </div>
    </>
  )
}

export default App