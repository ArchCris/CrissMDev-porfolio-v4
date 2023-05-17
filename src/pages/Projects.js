import React from 'react'
import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className='projects__conteiner' id='Projects'>
      <h3 className='projects__title' >Projects</h3>
      <ProjectCard/>  
      <ProjectCard/>  
      <ProjectCard/>  
    </div>
  )
}

export default Projects