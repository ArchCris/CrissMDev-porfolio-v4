import React from 'react'
import '../styles/About.css'
import photo from '../images/photo/profileImg.jpeg'

const About = () => {
  return (
    <div className='about__conteiner' id='About'>
      <h3 className='about__title' >About</h3>
      <div className='about__bottom' >
        <p>As an architect with a passion for programming, I bring a unique perspective to the world of software development. Over the past four years, I have dedicated myself to learning and practicing programming, driven by my desire to create innovative digital services and products, to the point of be proficient in the main technologies like React, Next ,MySQL, Github, create a CRUD, manage animations with libraries like frammer etc....</p>
        <img className='about__secB-img' alt='profile' src={photo}></img>
      </div>
    </div>
  )
}

export default About