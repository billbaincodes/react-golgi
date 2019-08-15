import React from 'react'
import resume from "../../assets/billBainResume.pdf"

const ResumeWindow = ({ resumeWindow }) => {
  return(
    <div class="window-container">
      <div class="window">
        <div class="window-title">
          <div>Resume / CV</div>
          <div class="close-button" onClick={() => resumeWindow(false)}>
            X
          </div>
        </div>
          
          <div className="window-buttons">
            <div onClick={() => resumeWindow(false)}>OK</div>
            <div onClick={() => resumeWindow(false)}>Cancel</div>
            <div>Help</div>
          </div>

      </div>
    </div>
  )
}

export default ResumeWindow