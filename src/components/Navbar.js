import React, { useState } from 'react'
import '../styles/Navbar.css'
import { Link } from 'react-scroll'
import ToggleTheme from './ToggleTheme'
import logo from '../images/photo/Logo.png'
import { useContext } from 'react'
import { themeContext } from '../Context/ContextProvider'

const Navbar = () => {

  const{mode}=useContext(themeContext)

  const[clicked,setClicked]=useState()

  const toggleMenu = () =>{
    console.log('clicked')
    if(clicked===true){
      setClicked(false)
    }else{
      setClicked(true)
    }
  }

  return (
    <div className='navbar__conteiner'>
      <div className='navbar__subconteiner'>
        <Link className={mode ? 'navbar__main white' : 'navbar__main'} to="Home" spy={true} smooth={true} offset={0} duration={500} ><img alt='logo' src={logo}></img></Link>
        <nav className={clicked ? `navbar__menu displayed` : `navbar__menu`}>
          <ul className='navbar__menu-ul'>
            <li>
              <Link onClick={()=>{toggleMenu()}} className='navbar__link' activeClass="active-link" to="Home" spy={true} smooth={true} offset={0} duration={500} >Home</Link>
            </li>
            <li>
              <Link onClick={()=>{toggleMenu()}}  className='navbar__link' activeClass="active-link" to="About" spy={true} smooth={true} offset={0} duration={500} >About</Link>
            </li>
            <li>
              <Link onClick={()=>{toggleMenu()}}  className='navbar__link' activeClass="active-link" to="Skills" spy={true} smooth={true} offset={0} duration={500} >Skills</Link>
            </li>
            <li>
              <Link onClick={()=>{toggleMenu()}}  className='navbar__link' activeClass="active-link" to="Projects" spy={true} smooth={true} offset={0} duration={500} >Projects</Link>
            </li>
            <li>
              <Link onClick={()=>{toggleMenu()}}  className='navbar__link' activeClass="active-link" to="Contact" spy={true} smooth={true} offset={0} duration={500} >Contact</Link>
            </li>
            <li>
              <ToggleTheme func={toggleMenu}/>
            </li>
          </ul>
        </nav>
        <div onClick={()=>{toggleMenu()}} className='navbar__button'>
        <div className='navbar__button_cont'>
          <div className={clicked ? `navbar__bar1 trans1` : `navbar__bar1`} ></div>
          <div className={clicked ? `navbar__bar2 trans2` : `navbar__bar2`} ></div>
          <div className={clicked ? `navbar__bar3 trans3` : `navbar__bar3`} ></div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar