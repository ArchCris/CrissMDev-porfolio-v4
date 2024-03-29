import React from 'react'
import '../styles/ProjectCard.css'
import topTab from '../images/projects/topTab.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faChrome } from '@fortawesome/free-brands-svg-icons'


const ProjectCard = (props) => {
  console.log(props.status["live"])
  return (
    <div className='projectCard__conteiner'>
      <div className='projectCard__secA'>
          <img className='projectCard__image-tab'  alt='name' src={topTab}></img>
          {props.image[0]==="image" ?
          <img className='projectCard__image' alt='name' src={props.image[1]}></img>
          :
          <video className='projectCard__image' src={props.image[1]} loop autoPlay muted controls >
            Tu navegador no admite el elemento <code>video</code>.
          </video> }
      </div>
      <div className='projectCard__secB'>
        <p className='projectCard__title'>{props.title}</p>
        <div className='projectCard__stacks'>
        {props.stacks.map((stack,key)=>{
          return(
            <img className='projectCard__stack' key={key} alt='stack' src={stack}></img>
          )
        })}
        </div>
        <p className='projectCard__description'>&nbsp;{props.description}</p>
        <div className='projectCard__buttons'>
          {props.status["live"] ?
          <a className='projectCard__button' href={props.url}><FontAwesomeIcon icon={faChrome} size="lg" />LIVE</a> :
          <a className='projectCard__button disabled' href={props.url}><FontAwesomeIcon icon={faChrome} size="lg" />LIVE</a>
          }
          {props.status["github"] ?
          <a className='projectCard__button' href={props.repository}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>GitHub</a> :
          <a className='projectCard__button disabled' href={props.repository}><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>GitHub</a>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard