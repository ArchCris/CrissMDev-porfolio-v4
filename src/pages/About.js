import React from 'react'
import '../styles/About.css'
import photo from '../images/photo/profileImg.jpeg'

const About = () => {
  return (
    <div className='about__conteiner' id='About'>
      <h3 className='about__title' >About</h3>
      <div className='about__bottom' >
        <p className='about__bottom-text'>&nbsp;As a full-stack developer with an architectural background, I can say that I have found my passion coding. I love working on designing and creating digital products, from web pages to complete apps with databases, user authentication and API.
        <br/><br/>
        &nbsp;I had my first encounter with coding working with B.I.M. in architecture five years ago, since that moment I started my coding journey &#129299;, spending any free time learning new technologies, methodologies and enjoying every second of the IT world.
        <br/><br/>
        &nbsp;If you want to work with a passionate developer don't hesitate to contact me, to create innovative digital products together &#128522;.</p>
        <img className='about__bottom-img' alt='profile' src={photo}></img>
      </div>
    </div>
  )
}

export default About