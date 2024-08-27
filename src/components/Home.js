import React from 'react';
import logo from './logo.png';
import background from './background.png';
import { TiArrowRightOutline } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import TextShpere from './TextShpere';
import Projects from './Projects';
import { ContactUs } from './Contact';
import Resume from './Resume.pdf';

const Home = () => {
    return (
        <div className='h-full mt-8 overflow-x-hidden'>
            <div id="home" className='px-5 flex flex-col md:flex-row items-center gap-10 md:gap-20 lg:gap-40'>
                <div className='w-full md:w-6/12 mt-12 md:mt-24'>
                    <p className='flex items-center text-2xl md:text-3xl font-bold text-gray-400'>Hi, I'm 
                        <img className='h-8 md:h-10 grayscale hover:grayscale-0 ml-3 cursor-pointer' src={logo} alt='logo' />
                    </p>
                    <p className='text-lg md:text-xl font-bold text-gray-400 mt-3 md:mt-5'>And, I'm a 
                        <span className='hover:text-[#FF5252]'> Full stack web developer</span>
                    </p>
                    <p className='text-sm md:text-base font-bold text-gray-400 mt-3 md:mt-5'>
                        An enthusiastic web developer with 1000+ hours of coding experience in HTML, CSS, React, and various technologies. I have a problem-solving mindset and excel in collaboration. I'm eager to use my skills and experience to contribute to building world-class projects and achieving organizational goals.
                    </p>
                    <p className='text-lg md:text-xl font-bold text-gray-400 mt-6 md:mt-10 flex items-center gap-2 group'>
                        Find me on 
                        <span className='mt-1 group-hover:text-[#FF5252]'>
                            <TiArrowRightOutline />
                        </span>
                        <span className='mt-1 mr-1 hover:text-[#FF5252] cursor-pointer'>
                            <FaGithub />
                        </span>
                        <span className='mt-1 mr-1 hover:text-[#FF5252] cursor-pointer'>
                            <FaLinkedin />
                        </span>
                        <span className='mt-1 mr-1 hover:text-[#FF5252] cursor-pointer'>
                            <SiLeetcode />
                        </span>
                        
                    </p>
                    <button className='text-gray-400 mt-8 md:mt-16 border border-gray-400 px-4 py-2 md:px-6 md:py-3 hover:border-[#FF5252] shadow-2xl hover:shadow-[#FF5252] transition-transform font-bold'>
                    <a href={Resume} download="Resume">DOWNLOAD RESUME</a>  
                    </button>
                </div>
                <div className='noob w-full md:w-auto mt-8'>
                    <img className='h-64 md:h-[28rem] grayscale hover:grayscale-0 ml-3 cursor-pointer rotate-12 hover:shadow-[#FF5252] transition-transform' src={background} alt='background' />
                </div>
            </div>
      <section id="skills" className="py-16">
        <TextShpere />
      </section>
      <section id="projects" className="py-16">
        <Projects />
      </section>
      <section id="contact" className="py-16">
        <ContactUs />
      </section>
        </div>
    );
}

export default Home;
