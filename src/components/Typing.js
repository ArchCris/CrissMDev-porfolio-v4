import React, { useEffect, useState } from 'react'
import '../styles/Typing.css'

const Typing = () => {


  const[displayText,setDisplayText]=useState()

  const texts = ["Fullstack","Frontend","Designer","Architect"]
  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";
  
  function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count]
    letter = currentText.slice(0, index++)
    setDisplayText(letter)
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }
  
    setTimeout(type, 300);
  }

  useEffect(() => {
    type()
     // eslint-disable-next-line
  }, []);

  return (
    <div className='typing__conteiner'>
      <span className='typing__text'>{displayText}</span><span className='typing__span'>|</span>
    </div>
  )
}

export default Typing