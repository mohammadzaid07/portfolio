import React, { useState, useEffect } from 'react';
import { projects } from '../../data';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);


  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id='projects'
      className='py-24 pb-24 px-[8vw] md:px-[4vw] lg:px-[10vw] xl:px-[12vw] font-sans relative'
    >
      {/* Section Title */}
      <div className='text-center mb-16'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>
          PROJECTS
        </h2>
        <div className="w-48 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className='text-gray-300 mt-4 text-lg font-semibold'>
          A showcase of projects that reflect my skills, creativity, and experience with diverse technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className='border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300'
          >
            <div className='p-4'>
              <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-xl' />
            </div>
            <div className='p-6'>
              <h3 className='text-2xl font-bold text-white mb-2'>
                {project.title}
              </h3>
              <p className='text-gray-300 mb-4 pt-4 line-clamp-3'>
                {project.description}
              </p>
              <div className='mb-4'>
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className='inline-block bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1 mr-2 mb-2'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Modal Container */}
      {selectedProject && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 overflow-y-auto'>
          <div className='relative bg-gray-900 rounded-xl shadow-2xl w-full max-w-3xl mx-auto my-auto max-h-[90vh] overflow-y-auto'>
            <div className='flex justify-end p-4'>
              <button
                onClick={handleCloseModal}
                className='absolute top-2 right-2 text-white text-4xl hover:text-[#8245ec] transition cursor-pointer'
              >
                &times;
              </button>
              <div className='flex flex-col pt-5'>
                <div className='w-full flex justify-center mt-6 bg-gray-900 px-4'>
                  <img src={selectedProject.image} alt={selectedProject.title} className=' lg:w-full w-[95%] object-contain rounded-xl shadow-2xl ' />
                </div>
                <div className='flex gap-8 mt-4 px-8'>
                  <a href={selectedProject.livelink} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-600 hover:bg-purple-600 text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    View Live
                  </a>
                  <a href={selectedProject.github} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-600 hover:bg-purple-600 text-gray-300 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
                    View Code
                  </a>
                </div>
                <div className='lg:p-8 p-6'>
                  <h3 className='lg:text-3xl font-bold text-white mb-4 text-md '>
                    {selectedProject.title}
                  </h3>
                  <p className='text-gray-300 mb-6 lg:text-base text-xs'>
                    {selectedProject.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb2'>
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className='bg-[#251f38] text-xs font-semibold text-purple-400 rounded-full px-2 py-1 '
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects;