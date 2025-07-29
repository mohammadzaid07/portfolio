import React from 'react';
import Tilt from 'react-parallax-tilt';
import { TypeAnimation } from 'react-type-animation';
import { aboutInfo } from '../../data';
import { FaExternalLinkAlt, FaLinkedin, FaGithub, } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank } from "react-icons/si";

const About = () => {
  const { name, roles, aboutMe, resumeLink, profilePic, linkedinLink, githubLink, leetcodeLink, geeksforgeeksLink, hackerrankLink } = aboutInfo[0];
  const typingSequence = roles.flatMap(role => [role, 2000]);

  return (
    <section
      id='about'
      className='py-4 px-[8vw] md:px-[4vw] lg:px-[10vw] xl:px-[12vw] font-sans mt-16 md:mt-24 lg:mt-32 scroll-mt-52'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/* Left Side */}
        <div className='md:w-3/5 text-center md:text-left mt-8 md:mt-0 pr-10'>

          {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-4 leading-tight'>
            {name}
          </h2>

          {/* Typing Effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight'>
            <span className='text-white'>
              I am a
            </span>
            <TypeAnimation
              sequence={typingSequence}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={true}
              className="text-[#8245ec]"
            />
          </h3>

          {/* About me  */}
          <p className='text-base sm:text-md md:text-md text-gray-400 mb-4 mt-8 leading-relaxed '>
            {aboutMe}
          </p>

          {/* Profile Links */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-8 mb-8">
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
                className="text-3xl text-white hover:text-purple-500 transition-transform transform hover:scale-120"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Resume Button */}
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 text-white py-3 px-6 rounded-full mt-2 text-xl font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 20px #8245ec',
            }}
          >
            RESUME <FaExternalLinkAlt />
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-2/5 flex justify-center md:justify-end'>
          <Tilt
            className='w-[12rem] h-[12rem] sm:w-[16rem] sm:h-[16rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem] xl:w-[24rem] xl:h-[24rem] 2xl:w-[30rem] 2xl:h-[30rem] rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profilePic}
              alt={name}
              className='w-full rounded-full border-4 border-white  object-cover drop-shadow-[0_30px_40px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section >
  )
}

export default About;