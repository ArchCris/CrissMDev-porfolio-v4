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
          <ProjectCard key={key} image={project.image} title={project.title} status={project.status} description={project.description} url={project.url} repository={project.repository} stacks={project.stacks}/> 
        )
      })}
    </div>
  )
}

export default Projects