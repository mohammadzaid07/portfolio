import React from 'react';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";
import { aboutInfo } from '../../data';

const Footer = () => {

  const { name, linkedinLink, githubLink, leetcodeLink, geeksforgeeksLink, hackerrankLink } = aboutInfo[0];

  // Smooth Scroll
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <footer className='text-white py-8 px-[8vw] md:px-[4vw] lg:px-[10vw] xl:px-[12vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-2xl font-semibold text-purple-500'>
          {name}
        </h2>

        {/* Navigation Links */}
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4'>
          {[
            { name: 'About', id: 'about' },
            { name: 'Skills', id: 'skills' },
            { name: 'Projects', id: 'projects' },
            { name: 'Experience', id: 'experience' },
            { name: 'Education', id: 'education' },
            { name: 'Contact', id: 'contact' },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'
            >
              {item.name}

            </button>
          ))
          }
        </nav>

        {/* Social and Profile Links */}
        <div className="flex flex-wrap justify-center space-x-4 mt-6">
          {[
            { icon: <FaLinkedin />, link: `${linkedinLink}` },
            { icon: <FaGithub />, link: `${githubLink}` },
            { icon: <SiGeeksforgeeks />, link: `${geeksforgeeksLink}` },
            { icon: <SiLeetcode />, link: `${leetcodeLink}` },
            { icon: <SiHackerrank />, link: `${hackerrankLink}` },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl hover:text-purple-500 transition-transform transform hover:scale-120"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400 mt-6">
          © 2025 {name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer;