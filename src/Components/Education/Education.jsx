import React from 'react';
import { education } from '../../data';

const Education = () => {
  return (
    <section
      id='education'
      className='py-24 pb-24 px-[8vw] md:px-[4vw] lg:px-[10vw] xl:px-[12vw] font-sans bg-[image:var(--bg-custom-gradient)] bg-cover bg-no-repeat clip-path-custom-3'>

      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-white text-3xl sm:text-4xl font-bold'>
          EDUCATION
        </h2>
        <div className="w-56 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className='text-gray-300 mt-4 text-lg font-semibold'>
          My formal education, contributing to both personal development and technical proficiency
        </p>
      </div>

      {/* Education Timeline */}
      <div className='relative'>

        {/* Vertical Line */}
        <div className='absolute md:left-1/2 left-0 transform -translate-x-1/2 md:-translate-x-0 w-1 bg-white h-full'></div>

        {/* Education Entries */}
        {education.map((education, index) => (
          <div
            key={education.id}
            className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>

            {/* Timeline Markers */}
            <div className='absolute md:left-1/2 left-0 transform -translate-x-1/2 bg-white border-2 border-[#8245ec] w-16 h-16 md:w-14 md:h-14 xl:w-18 xl:h-18 rounded-full flex justify-center items-center z-10'>
              <img
                src={education.img}
                alt={education.institute}
                className='object-cover rounded-full'
              />
            </div>

            {/* Timeline Cards */}
            <div className={`w-full sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md p-6 ml-12 md:ml-0 md:mr-0 lg:ml-0 lg:mr-0 xl:ml-1 xl:mr-1 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] ${index % 2 === 0 ? "md:ml-0" : "md:mr-0"} transform transition-transform duration-300 hover:scale-102`}>

              {/* Content */}
              <div className='flex items-center space-x-4'>

                {/* Institute Logo */}
                <div className='flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 xl:w-16 xl:h-16 bg-white rounded-md overflow-hidden'>
                  <img
                    src={education.img}
                    alt={education.institute}
                    className='w-full h-full object-cover'
                  />
                </div>

                {/* Course and Institute */}
                <div className='flex flex-col justify-between'>
                  <div>
                    <h3 className='text-xl sm:text-2xl font-semibold text-white'>
                      {education.course}
                    </h3>
                    <h4 className='text-md sm:text-sm text-[#8245ec]'>
                      {education.institute}
                    </h4>
                  </div>

                  {/* Time Period */}
                  <p className='text-sm text-gray-300 mt-2'>{education.date}</p>
                </div>
              </div>
              <p className='mt-4 text-gray-400 font-bold'>Grade: {education.grade}</p>
              <p className='mt-4 text-gray-200'>{education.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education;