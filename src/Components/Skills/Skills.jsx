import React from 'react';
import { skillsInfo } from '../../data';
import Tilt from 'react-parallax-tilt'

const Skills = () => {
  return (
    <section
      id='skills'
      className='py-24 pb-24 px-[8vw] md:px-[10vw] lg:px-[14vw] xl:px-[18vw] font-sans bg-[image:var(--bg-custom-gradient)] bg-cover bg-no-repeat clip-path-custom'
    >
      {/* Section Title */}
      <div className='text-center mb-8 '>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>
          SKILLS
        </h2>
        <div className="w-28 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-300 mt-4 text-lg font-semibold">
          A showcase of my technical skills and expertise, developed through hands-on projects and learning experiences
        </p>
      </div>

      {/* Skills Category */}
      <div className='flex flex-wrap gap-3 lg:gap-5 py-10 justify-between'>
        {skillsInfo.map((category) => (
          <div
            key={category.title}
            className='bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-3xl border border-white 
          shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]'
          >
            <h3 className='text-2xl sm:text-3xl font-semibold text-gray-300 mb-4 text-center'>
              {category.title}
            </h3>

            {/* Skill Items */}

            <div className='grid grid-cols-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-2'>
              {category.skills.map((skill) => (
                <Tilt
                  key={skill.name}
                  tiltMaxAngleX={30}
                  tiltMaxAngleY={30}
                  perspective={1000}
                  scale={1.02}
                  transitionSpeed={1000}
                  gyroscope={true}
                >
                  <div className='flex flex-col items-center justify-center md:gap-2 gap-1 border-2 bg-gray-700 border-gray-500 rounded-2xl p-4 text-center'>
                    <img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className='w-8 h-8 md:w-12 md:h-12 lg:w-12 lg:h-12 xl:w-14 xl:h-14'
                    />
                    <span className='text-xs sm:text-sm lg:text-md text-gray-100'>
                      {skill.name}
                    </span>
                  </div>
                </Tilt>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;