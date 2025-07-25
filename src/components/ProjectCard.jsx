import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowUpRightFromSquare} from '@fortawesome/free-solid-svg-icons'
const ProjectCard = (props) => {
  return (
    <div className='relative w-[60%] md:w-[40%] min-h-[30%] rounded-xl overflow-hidden group shadow-lg shadow-gray-400 pcard'>
      <a href={props.link} target='_blank'>
        <div>
          <img src={props.img} alt="" className='w-full h-auto object-cover' />
        </div>
        <div className='flex justify-between items-center px-4 absolute bottom-[-100%] left-0 z-50 bg-white bg-opacity-70 text-black w-full p-2 group-hover:bottom-0 transition-all duration-500 ease-in-out opacity-84'>
          <h1 className='text-lg'>{props.title}</h1>
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-xl hover:text-blue-400'/>
        </div>
        </a>
    </div>
  )
}

export default ProjectCard
