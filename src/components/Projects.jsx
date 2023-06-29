import React from 'react'
import ProjectItem from './ProjectItem'
import beach from '../assets/beach.jpeg'
import nature from '../assets/nature.jpeg'
import food from '../assets/nature.jpeg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita deserunt quibusdam ab doloremque blanditiis voluptate itaque pariatur quam, neque eveniet?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={beach} title='Beach App' />
        <ProjectItem img={nature} title='Nature App' />
        <ProjectItem img={food} title='Food App' />
      </div>
    </div>
  )
}

export default Projects