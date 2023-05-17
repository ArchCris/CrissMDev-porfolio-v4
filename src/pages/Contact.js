import React from 'react'
import '../styles/Contact.css'
import devGuy from '../images/lottie/devGuy.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Player } from '@lottiefiles/react-lottie-player';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
  return (
    <div className='contact__conteiner' id='Contact'>
      <h3 className='contact__title' >Let's connect</h3>
      <div className='contact__bottom' >
        <Player className='contact__devGuy' autoplay loop src={devGuy}/>
        <div className='contact__bottom-data'>
          <span className='contact__bottom-data-field'><FontAwesomeIcon icon={faLinkedin} size="lg" /><a href='https://www.linkedin.com/in/arqcristianmasci'>/arqcristianmasci</a></span>
          <span className='contact__bottom-data-field'><FontAwesomeIcon icon={faGithub} size="lg" /><a href='https://github.com/ArchCris'>/ArchCris</a></span>
          <span className='contact__bottom-data-field'><FontAwesomeIcon icon={faEnvelope} /><a href = "mailto: arq.cristianmasci@gmail.com">arq.cristianmasci@gmail.com</a></span>
        </div>
      </div>
    </div>
  )
}

export default Contact