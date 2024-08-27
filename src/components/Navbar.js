import React, { useState } from 'react';
import logo from './logo.png';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black px-5 w-10/12  h-20 flex justify-between items-center fixed  top-0 z-50'>
      <div>
        <img className='h-12 grayscale hover:grayscale-0 cursor-pointer' src={logo} alt='logo' />
      </div>

      {/* Hamburger Menu Button */}
      <div className='sm:hidden'>
        <button onClick={toggleMenu} className='text-gray-400 focus:outline-none'>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:flex gap-4 md:gap-8 lg:gap-12 xl:gap-16 items-center absolute sm:static top-20 left-0 w-full sm:w-auto bg-black sm:bg-transparent sm:flex-row flex-col sm:justify-end text-center sm:text-left  z-10`}
      >
        <li className='text-gray-400 hover:text-[#FF5252] cursor-pointer font-bold py-2 sm:py-0'>
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        </li>
        <li className='text-gray-400 hover:text-[#FF5252] cursor-pointer font-bold py-2 sm:py-0'>
          <Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>Skills</Link>
        </li>
        <li className='text-gray-400 hover:text-[#FF5252] cursor-pointer font-bold py-2 sm:py-0'>
          <Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Projects</Link>
        </li>
        <li className='text-gray-400 hover:text-[#FF5252] cursor-pointer font-bold py-2 sm:py-0'>
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
