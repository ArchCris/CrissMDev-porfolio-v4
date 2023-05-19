import React from 'react'
import '../styles/About.css'
import photo from '../images/photo/profileImg.jpeg'

const About = () => {
  return (
    <div className='about__conteiner' id='About'>
      <h3 className='about__title' >About</h3>
      <div className='about__bottom' >
        <p className='about__bottom-text'>&nbsp;As a full-stack developer with a background in architecture, I have discovered my true passion for coding. I thoroughly enjoy designing and creating digital products, ranging from web pages to comprehensive applications complete with databases, user authentication, and APIs.<br/><br/>

        &nbsp;My journey into coding began five years ago when I first encountered coding while working with B.I.M. in architecture. Since then, I have been dedicated to continuously learning new technologies and methodologies, immersing myself in the world of IT. I enthusiastically devote all my time to expand my knowledge and skills.<br/><br/>

        &nbsp;If you are seeking a passionate developer to collaborate on creating innovative digital products, please do not hesitate to contact me. Together, we can build something remarkable.
        </p>
        <img className='about__bottom-img' alt='profile' src={photo}></img>
      </div>
    </div>
  )
}

export default About