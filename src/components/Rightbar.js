import React from 'react'
import { Link } from 'react-scroll'
import '../styles/Rightbar.css'

const Rightbar = () => {
  return (
    <div className='rightbar__conteiner'>
      <Link className='rightbar__index' activeClass="rightbar__active" to="Home" spy={true} smooth={true} offset={0} duration={500} ></Link>
      <Link className='rightbar__index' activeClass="rightbar__active" to="About" spy={true} smooth={true} offset={0} duration={500} ></Link>
      <Link className='rightbar__index' activeClass="rightbar__active" to="Skills" spy={true} smooth={true} offset={0} duration={500} ></Link>
      <Link className='rightbar__index' activeClass="rightbar__active" to="Projects" spy={true} smooth={true} offset={0} duration={500} ></Link>
      <Link className='rightbar__index' activeClass="rightbar__active" to="Contact" spy={true} smooth={true} offset={0} duration={500} ></Link>
    </div>
  )
}

export default Rightbar