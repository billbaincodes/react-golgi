import React from 'react'
import StartButton from './StartButton.js'

const Start = () => {

  let state = {
    clickToggle: false
  }


  return(
    <div className="dock">
      <StartButton />
    </div>  
  )
}

export default Start