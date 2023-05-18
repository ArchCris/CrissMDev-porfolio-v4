import React from 'react'
import '../styles/ProjectCard.css'

const ProjectCard = (props) => {
  return (
    <div className='projectCard__conteiner'>
      <div className='projectCard__secA'> <img className='projectCard__image' alt='name' src={props.image}></img></div>
      <div className='projectCard__secB'>
        <p>{props.title}</p>

      </div>
    </div>
  )
}

export default ProjectCard