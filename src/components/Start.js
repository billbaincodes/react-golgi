import React from 'react'
import StartButton from './StartButton.js'

const Start = ({ menuToggle, currentTime }) => {

  return(
    <div className="dock">
      <StartButton menuToggle={menuToggle} />
      <div className="dock-time">
        {currentTime}
      </div>
    </div>  
  )
}

export default Start