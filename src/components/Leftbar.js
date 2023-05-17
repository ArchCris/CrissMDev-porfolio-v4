import React from 'react'
import '../styles/Leftbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'


const Leftbar = () => {
  return (
    <div className='leftbar__conteiner'>
      <a className='leftbar__index' href="https://github.com/ArchCris"><FontAwesomeIcon icon={faGithub}/></a>
      <a className='leftbar__index' href="https://www.linkedin.com/in/arqcristianmasci"><FontAwesomeIcon icon={faLinkedin}/></a>
      <a className='leftbar__index' href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube}/></a>  
    </div>
  )
}

export default Leftbar