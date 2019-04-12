import React from 'react'
import StartButton from './StartButton.js'

const Start = ({ menuToggle }) => {

  let datefinder = () => {
    let date = new Date
    return date.getTime
  }

  return(
    <div className="dock">
      <StartButton menuToggle={menuToggle} />
      <div className="dock-time">
        10:23
      </div>
    </div>  
  )
}

export default Start