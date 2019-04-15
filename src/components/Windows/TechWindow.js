import React from "react";
import bootstrapLogo from "../../assets/tech/Bootstrap-Logo.png"
import reactLogo from "../../assets/tech/React-Logo.png"

const AboutWindow = ({ aboutWindow }) => {
  return (
    <div class="window-container">
      <div class="window">
        <div class="window-title">
          <div>Tools & Technologies</div>
          <div class="close-button" onClick={() => aboutWindow(false)}>
            X
          </div>
        </div>
        <div class="window-body">
          <h3 className="window-headline">Front End</h3>
          <div className="tech-list">
            <img src={reactLogo} alt="bootstrap framework"/>
            <img src={bootstrapLogo} alt="bootstrap framework"/>

          </div>
          <h3 className="window-headline">Back End</h3>
          <div className="tech-list">
            <img src={reactLogo} alt="bootstrap framework"/>
            <img src={bootstrapLogo} alt="bootstrap framework"/>

          </div>
          <h3 className="window-headline">Full Stack</h3>
          <div className="tech-list">
            <img src={reactLogo} alt="bootstrap framework"/>
            <img src={bootstrapLogo} alt="bootstrap framework"/>

          </div>
          <div className="window-buttons" >
            <div onClick={() => aboutWindow(false)}>OK</div>
            <div onClick={() => aboutWindow(false)}>Cancel</div>
            <div>Help</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWindow;