import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import { ReactLenis, useLenis } from 'lenis/react'
import Stuff from './pages/Stuff';
import Projects from './pages/Projects';
// import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


function Component() {
  const lenis = useLenis(({ scroll }) => {
  })
  return (
    <ReactLenis root>
     <div className=''>
        <div id='Hero'>
          <Navbar />
          <Hero />
        </div>
        <div id="About">
          <Stuff />
        </div>
        <div>
          <Projects />
        </div>
      </div>
    </ReactLenis>
  )
}
export default function App() {
  return (
    Component()
  )
}