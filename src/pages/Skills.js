import React from 'react'
import '../styles/Skills.css'

import html from '../images/logos/logos-light/html5.png'
import css from '../images/logos/logos-light/css3.png'
import js from '../images/logos/logos-light/js.png'
import boot from '../images/logos/logos-light/bootstrap5.png'
import sass from '../images/logos/logos-light/sass.png'
import node from '../images/logos/logos-light/nodejs.png'
import ps from '../images/logos/logos-light/ps.png'
import figma from '../images/logos/logos-light/figma.png'
import react from '../images/logos/logos-light/reactjs.png'
import next from '../images/logos/logos-light/nextjs2.png'
import firebase from '../images/logos/logos-light/firebase.png'
import mysql from '../images/logos/logos-light/mysql.png'
import gitlab from '../images/logos/logos-light/gitlab.png'
import netlify from '../images/logos/logos-light/netlify.png'
import redux from '../images/logos/logos-light/redux.png'
import zod from '../images/logos/logos-light/zod.png'
import npm from '../images/logos/logos-light/npm.png'
import php from '../images/logos/logos-light/php.png'

const Skills = () => {
  return (
    <div className='skills__conteiner' id='Skills'>
       <h3 className='skills__title'>Skills</h3>
      <div className='skills__conteiner-display'>

        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='html5' src={html}></img>
          <p className='skills__logo-name'>HTML</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='css' src={css}></img>
          <p className='skills__logo-name'>CSS</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='js' src={js}></img>
          <p className='skills__logo-name'>JS</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Bootstrap' src={boot}></img>
          <p className='skills__logo-name'>BOOTSTRAP</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Sass' src={sass}></img>
          <p className='skills__logo-name'>SASS</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='React' src={react}></img>
          <p className='skills__logo-name'>REACT</p>
        </div>

        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Photoshop' src={ps}></img>
          <p className='skills__logo-name'>PS</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Figma' src={figma}></img>
          <p className='skills__logo-name'>FIGMA</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Node' src={node}></img>
          <p className='skills__logo-name'>NODE</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Next' src={next}></img>
          <p className='skills__logo-name'>NEXT</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Firebase' src={firebase}></img>
          <p className='skills__logo-name'>FIREBASE</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Mysql' src={mysql}></img>
          <p className='skills__logo-name'>MYSQL</p>
        </div>

        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Github' src={gitlab}></img>
          <p className='skills__logo-name'>GITHUB</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Netlify' src={netlify}></img>
          <p className='skills__logo-name'>NETLIFY</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Redux' src={redux}></img>
          <p className='skills__logo-name'>REDUX</p>
        </div>
        <div className='skills__logo-cont' >
          <img className='skills__logo' alt='Zod' src={zod}></img>
          <p className='skills__logo-name'>ZOD</p>
        </div>
        <div className='skills__logo-cont' >
        <img className='skills__logo' alt='Npm' src={npm}></img>
          <p className='skills__logo-name'>NPM</p>
        </div>
        <div className='skills__logo-cont' >
        <img className='skills__logo' alt='Php' src={php}></img>
          <p className='skills__logo-name'>PHP</p>
        </div>
      </div>
    </div>
  )
}

export default Skills