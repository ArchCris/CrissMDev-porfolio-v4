import React from 'react'
import { createContext,useState } from 'react'

export const themeContext = createContext()

const ContextProvider = ({children}) => {

  const[mode,setMode]=useState(false)

  return (
    <themeContext.Provider value={{mode:mode,setMode:setMode}}>
      {children}
    </themeContext.Provider>
  )
}

export default ContextProvider