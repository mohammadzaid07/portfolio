import React from 'react';
import { experiences } from '../../data';

const Experience = () => {
  return (
    <section
      id='experience'
      className='py-24 pb-24 px-[8vw] md:px-[4vw] lg:px-[10vw] xl:px-[12vw] font-sans bg-[image:var(--bg-custom-gradient)] bg-cover bg-no-repeat clip-path-custom-2'>

      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-white text-3xl sm:text-4xl font-bold'>
          EXPERIENCE
        </h2>
        <div className="w-56 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className='text-gray-300 mt-4 text-lg font-semibold'>
          Professional experience across impactful roles and teams
        </p>
      </div>

      {/* Experience Timeline */}
      <div className='relative'>

        {/* Vertical Line */}
        <div className='absolute md:left-1/2 left-0 transform -translate-x-1/2 md:-translate-x-0 w-1 bg-white h-full'></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>

            {/* Timeline Markers */}
            <div className='absolute md:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-2 border-[#8245ec] w-16 h-16 md:w-14 md:h-14 xl:w-18 xl:h-18 rounded-full flex justify-center items-center z-10'>
              <img
                src={experience.img}
                alt={experience.company}
                className='object-cover rounded-full'
              />
            </div>

            {/* Timeline Cards */}
            <div className={`w-full sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md p-6 ml-12 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 xl:ml-1 xl:mr-1 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "md:ml-0" : "md:mr-0"} transform transition-transform duration-300 hover:scale-102`}>

              {/* Content */}
              <div className='flex items-center space-x-4'>

                {/* Company Logo */}
                <div className='flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 bg-white rounded-md overflow-hidden'>
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Role and Company */}
                <div className='flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl sm:text-2xl font-semibold text-white'>
                      {experience.role}
                    </h3>
                    <h4 className='text-md sm:text-sm text-[#8245ec]'>
                      {experience.company}
                    </h4>
                  </div>

                  {/* Time Period */}
                  <p className='text-sm text-gray-300 mt-2'>{experience.date}</p>
                </div>
              </div>
              <p className='mt-4 text-gray-200'>{experience.desc}</p>
              <div className='mt-4'>
                <h5 className='font-md text-white'>
                  Skills:
                </h5>
                <ul className='flex flex-wrap mt-2'>
                  {experience.skills.map((skill, index) => (
                    <li
                      key={index}
                      className='bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border-gray-400 '
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience;