import React, { useContext } from 'react'
import '../styles/ToggleTheme.css'
import { themeContext } from '../Context/ContextProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const ToggleTheme = (props) => {

  const{mode,setMode}=useContext(themeContext)

  const toggleMode = () =>{
    let currentTheme = document.documentElement.getAttribute('data-theme');
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