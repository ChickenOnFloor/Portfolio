import React from 'react'

const Nav = () => {
  return (
    <div className='flex justify-center items-center w-full h-[2.5vw] border-b'>
        <ul className='flex gap-[4vw] font-ProductSans text-[.9vw]'>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </div>
  )
}

export default Nav