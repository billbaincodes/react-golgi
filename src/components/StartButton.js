import React, { Component } from 'react'
import windowsLogo from "../assets/windowslogo.png"


class StartButton extends Component {

  state = {
    clickToggle: false
  }


  render(){
  return(
    <button className="start-button">
      <img src={windowsLogo} alt="classic windows logo"/>
      <span>Start</span>
    </button>
  )}
}

export default StartButton