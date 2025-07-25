import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
  useGSAP(() => {
    gsap.from('.logo', {
      opacity: 0,
      y: -80
    })
    gsap.from('.nav-items > div', {
      opacity: 0,
      y: -80,
    })
    
  }, []);

  return (
    <div className='flex justify-between items-center w-full h-16 bg-[whitesmoke] shadow-lg shadow-gray-400 px-8 md:fixed z-50'>
      <div className="logo">
        <h1 className='text-xl sm:text-2xl md:text-3xl font-bold'>PORTFOLIO.</h1>
      </div>
      <div className="gap-2 nav-items text-xl font-bold flex">
        <div className='barItem w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center border-gray-300 border hover:bg-gray-300 cursor-pointer transition-all'>
          <a href="https://github.com/ChickenOnFloor" target='_blank' className='flex justify-center items-center'>
            <FontAwesomeIcon icon={faGithub} className='text-2xl'/>
          </a>
        </div>
        <div className='barItem w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 flex items-center justify-center border-gray-300 border hover:bg-gray-300 cursor-pointer transition-all'>
          <a href="https://www.linkedin.com/in/muhammad-jawwad-siddique-5b61ab257" target='_blank' className='flex justify-center items-center'>
            <FontAwesomeIcon icon={faLinkedin} className='text-xl sm:text-2xl text-blue-700' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
