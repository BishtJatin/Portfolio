import React from 'react'
import { FaGithub } from "react-icons/fa";

import { HiOutlineLink } from "react-icons/hi";

const Card = ({ image, name, description, socialLinks }) => {
 
    // console.log(socialLinks);

  return (
    <div className='text-gray-400 group cursor-pointer border-2 w-11/12   mt-10 mb-10 hover:border-[#FF5252] shadow-2xl hover:shadow-[#FF5252] transition-transform'>
        <img className='w-full h-56 grayscale group-hover:grayscale-0'  src={image}/>
        <p className='text-2xl mt-2 hover:text-[#FF5252] pl-1'>{name}</p>
        <p className='text-xl mt-2 pl-1'>{description}</p>
        <p className='flex text-xl mt-2 mb-2 pl-1'> <span className='mt-1 mr-1 hover:text-[#FF5252] cursor-pointer '>  <a href={socialLinks.github} > <FaGithub /></a> </span>  <span className='mt-1 ml-1 mr-1 hover:text-[#FF5252] cursor-pointer '>  <a href={socialLinks.live} > <HiOutlineLink /> </a></span></p>
    </div>
  )
}

export default Card