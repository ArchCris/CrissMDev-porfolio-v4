import React from 'react'
import '../styles/Projects.css'
import ProjectCard from '../components/ProjectCard'

import { projectData } from '../ProojectsData'

const Projects = () => {
  return (
    <div className='projects__conteiner' id='Projects'>
      <h3 className='projects__title' >Projects</h3>
      {projectData.map((project,key)=>{
        return(
          <ProjectCard key={key} image={project.image} title={project.title}/> 
        )
      })}
    </div>
  )
}

export default Projects