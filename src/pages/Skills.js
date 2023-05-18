import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../Context/ContextProvider'
import '../styles/Skills.css'

import htmld from '../images/logos/logos-dark/html5.png'
import cssd from '../images/logos/logos-dark/css3.png'
import jsd from '../images/logos/logos-dark/js.png'
import bootd from '../images/logos/logos-dark/bootstrap5.png'
import sassd from '../images/logos/logos-dark/sass.png'
import noded from '../images/logos/logos-dark/nodejs.png'
import psd from '../images/logos/logos-dark/ps.png'
import figmad from '../images/logos/logos-dark/figma.png'
import reactd from '../images/logos/logos-dark/reactjs.png'
import nextd from '../images/logos/logos-dark/nextjs2.png'
import firebased from '../images/logos/logos-dark/firebase.png'
import mysqld from '../images/logos/logos-dark/mysql.png'
import gitlabd from '../images/logos/logos-dark/gitlab.png'
import netlifyd from '../images/logos/logos-dark/netlify.png'
import reduxd from '../images/logos/logos-dark/redux.png'
import zodd from '../images/logos/logos-dark/zod.png'
import npmd from '../images/logos/logos-dark/npm.png'
import phpd from '../images/logos/logos-dark/php.png'

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

  const{mode}=useContext(themeContext)



  return (
    <div className='skills__conteiner' id='Skills'>
       <h3 className='skills__title'>Skills</h3>
      <div className='skills__conteiner-display'>

        <div className='skills__logo-cont' >
          {!mode ? <img className='skills__logo' alt='html5' src={html}/> : <img className='skills__logo' alt='html5' src={htmld}/>}
          <p className='skills__logo-name'>HTML</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ? <img className='skills__logo' alt='css' src={css}></img> : <img className='skills__logo' alt='css' src={cssd}></img>}
          <p className='skills__logo-name'>CSS</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ? <img className='skills__logo' alt='js' src={js}></img> : <img className='skills__logo' alt='js' src={jsd}></img>}
          <p className='skills__logo-name'>JS</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Bootstrap' src={boot}></img> : <img className='skills__logo' alt='Bootstrap' src={bootd}></img>}
          <p className='skills__logo-name'>BOOTSTRAP</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Sass' src={sass}></img> : <img className='skills__logo' alt='Sass' src={sassd}></img>}
          <p className='skills__logo-name'>SASS</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='React' src={react}></img> : <img className='skills__logo' alt='React' src={reactd}></img>}
          <p className='skills__logo-name'>REACT</p>
        </div>

        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Photoshop' src={ps}></img> : <img className='skills__logo' alt='Photoshop' src={psd}></img>}
          <p className='skills__logo-name'>PS</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Figma' src={figma}></img> : <img className='skills__logo' alt='Figma' src={figmad}></img>}
          <p className='skills__logo-name'>FIGMA</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Node' src={node}></img> : <img className='skills__logo' alt='Node' src={noded}></img>}
          <p className='skills__logo-name'>NODE</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Next' src={next}></img> : <img className='skills__logo' alt='Next' src={nextd}></img>}
          <p className='skills__logo-name'>NEXT</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Firebase' src={firebase}></img> : <img className='skills__logo' alt='Firebase' src={firebased}></img>}
          <p className='skills__logo-name'>FIREBASE</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Mysql' src={mysql}></img> : <img className='skills__logo' alt='Mysql' src={mysqld}></img>}
          <p className='skills__logo-name'>MYSQL</p>
        </div>

        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Github' src={gitlab}></img> : <img className='skills__logo' alt='Github' src={gitlabd}></img>}
          <p className='skills__logo-name'>GITHUB</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Netlify' src={netlify}></img> : <img className='skills__logo' alt='Netlify' src={netlifyd}></img>}
          <p className='skills__logo-name'>NETLIFY</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Redux' src={redux}></img> : <img className='skills__logo' alt='Redux' src={reduxd}></img>}
          <p className='skills__logo-name'>REDUX</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?   <img className='skills__logo' alt='Zod' src={zod}></img> :  <img className='skills__logo' alt='Zod' src={zodd}></img>}
          <p className='skills__logo-name'>ZOD</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ? <img className='skills__logo' alt='Npm' src={npm}></img> : <img className='skills__logo' alt='Npm' src={npmd}></img>}
          <p className='skills__logo-name'>NPM</p>
        </div>
        <div className='skills__logo-cont' >
          {!mode ?  <img className='skills__logo' alt='Php' src={php}></img> :  <img className='skills__logo' alt='Php' src={phpd}></img>}
          <p className='skills__logo-name'>PHP</p>
        </div>
      </div>
    </div>
  )
}

export default Skills