import React, { useState } from 'react'
import '../styles/ToggleTheme.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const ToggleTheme = (props) => {

  console.log(props.func)

  const[mode,setMode]=useState(false)

  const toggleMode = () =>{
    let currentTheme = document.documentElement.getAttribute('data-theme');
    console.log(currentTheme)
    if(currentTheme===true  || currentTheme===null || currentTheme==='null'){
      setMode(true)
      document.documentElement.setAttribute('data-theme','dark');
    }else{
      setMode(false)
      document.documentElement.setAttribute('data-theme','null');
    }
  }

  const handleClick = () =>{
    toggleMode()
    props.func()

  }

  return (
    <div onClick={()=>{handleClick()}} className='toggleTheme__conteiner'>
      {!mode ?
      <FontAwesomeIcon className='toggleTheme__sun' icon={faSun}/>
      :
      <FontAwesomeIcon className='toggleTheme__moon' icon={faMoon}/>}
    </div>
  )
}

export default ToggleTheme