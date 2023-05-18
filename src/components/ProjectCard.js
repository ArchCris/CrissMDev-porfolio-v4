import React from 'react'
import '../styles/ProjectCard.css'
import topTab from '../images/projects/topTab.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChrome } from '@fortawesome/free-brands-svg-icons'


const ProjectCard = (props) => {
  return (
    <div className='projectCard__conteiner'>
      <div className='projectCard__secA'>
          <img className='projectCard__image-tab'  alt='name' src={topTab}></img>
          <img className='projectCard__image' alt='name' src={props.image}></img>
      </div>
      <div className='projectCard__secB'>
        <p className='projectCard__title'>{props.title}</p>
        <p className='projectCard__description'>&nbsp;{props.description}</p>
        <div className='projectCard__buttons'>
          <a className='projectCard__button' href={props.url}><FontAwesomeIcon icon={faChrome} size="lg" />LIVE</a>
          <a className='projectCard__button' href={props.repository}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard