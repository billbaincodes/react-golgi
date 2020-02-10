import React from 'react'
import windowsLogo from "../assets/windowslogo.png"

const  StartButton = ({ menuToggle }) => {

  return(
    <button onClick={menuToggle} className="start-button">
      <img src={windowsLogo} alt="classic windows logo"/>
      <span>Start</span>
    </button>
  )
}

export default StartButton