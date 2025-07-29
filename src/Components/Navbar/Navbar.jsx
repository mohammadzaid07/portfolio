import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { aboutInfo } from '../../data';

const Navbar = () => {
  // States
  const [activeSection, setActiveSection] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { name, linkedinLink, githubLink } = aboutInfo[0];


  // Check active section and highlight navbar link
  useEffect(() => {
    const sectionIds = menuItems.map(item => item.id);
    const sectionElements = sectionIds.map(id => document.getElementById(id));

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust sensitivity
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sectionElements.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      sectionElements.forEach((el) => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);


  // Check Scroll and Change Navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Menu Items
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[8vw] md:px-[4vw] lg:px-[10vw] xl:px-[12vw] ${isScrolled ? "bg-[#050414]/50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
      <div className='text-white py-5 flex justify-between items-center'>
        {/* Logo  */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-[#ffffff]'> {name}</span>
          <span className='text-[#8245ec]'> /</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex md:space-x-3 lg:space-x-5 xl:space-x-8 text-gray-200'>
          {menuItems.map((item) => (
            <li key={item.id} className={`hover:text-[#8245ec] ${activeSection === item.id ? 'text-[#8245ec]' : 'text-gray-200'
              }`}>
              <button className='cursor-pointer' onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className='hidden md:flex space-x-2'>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className='text-gray-300 text-2xl hover:text-[#8245ec]'>
            <FaGithub />
          </a>
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className='text-gray-300 text-2xl hover:text-[#8245ec]'>
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Icons */}
        <div className='md:hidden'>
          {
            isOpen ? (
              <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(false)} />
            ) : (
              <FiMenu className='text-3xl text-[#8245ec] cursor-pointer'
                onClick={() => setIsOpen(true)} />
            )
          }
        </div>

        {/* Mobile Menu Items */}
        {
          isOpen && (
            <div className='absolute top-16 left-1/2 -translate-x-1/2 w-4/5 bg-[#050414]/95  backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden'>
              <ul className='flex flex-col items-center space-y-4 py-4 text-gray-300'>
                {menuItems.map((item) => (
                  <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}>
                    <button onClick={() => handleMenuItemClick(item.id)}>
                      {item.label}
                    </button>
                  </li>
                ))}
                <div className='flex space-x-4'>
                  <a href={githubLink} target="_blank" rel="noopener noreferrer" className='text-gray-300 text-xl hover:text-[#8245ec]'>
                    <FaGithub />
                  </a>
                  <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className='text-gray-300 text-xl hover:text-[#8245ec]'>
                    <FaLinkedin />
                  </a>
                </div>
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar;