import React from "react";
import bootstrapLogo from "../../assets/tech/Bootstrap-Logo.png";
import reactLogo from "../../assets/tech/React-Logo.png";
import vueLogo from "../../assets/tech/58482acecef1014c0b5e4a1e.png"
import jsLogo from "../../assets/tech/JavaScript-Logo.jpg"
import restLogo from "../../assets/tech/RestAPI-Logo.png"
import nodeLogo from "../../assets/tech/NodeJS-Logo.png"
import pgLogo  from "../../assets/tech/PostgreSQL-Logo.png"
import knexLogo  from "../../assets/tech/KnexJS-Logo.png"


const TechWindow = ({ techWindow }) => {
  return (
    <div class="window-container">
      <div class="window">
        <div class="window-title">
          <div>Tools & Technologies</div>
          <div class="close-button" onClick={() => techWindow(false)}>
            X
          </div>
        </div>

        <div class="window-body">
          <h3 className="window-headline">Front End</h3>
          <div className="tech-list">
            <div className="tech-icon">
              <img src={jsLogo} alt="bootstrap framework" />
              <p>JavaScript</p>
            </div>
            <div className="tech-icon">
              <img src={reactLogo} alt="bootstrap framework" />
              <p>React</p>
            </div>
            <div className="tech-icon">
              <img src={vueLogo} alt="html framework" />
              <p>Vue</p>
            </div>
            <div className="tech-icon">
              <img src="https://vue-native.io/images/logo.png" alt="html framework" />
              <p>Vue Native</p>
            </div>
            <div className="tech-icon">
              <img src={bootstrapLogo} alt="html framework" />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>

        <div class="window-body">
          <h3 className="window-headline">Back End</h3>
          <div className="tech-list">
          <div className="tech-icon">
              <img src={nodeLogo} alt="bootstrap framework" />
              <p>Node</p>
            </div>
            <div className="tech-icon">
              <img src={restLogo} alt="bootstrap framework" />
              <p>RESTful API</p>
            </div>
            <div className="tech-icon">
              <img src={pgLogo} alt="bootstrap framework" />
              <p>PostgreSQL</p>
            </div>
            <div className="tech-icon">
              <img src={knexLogo} alt="bootstrap framework" />
              <p>Knex</p>
            </div>
            <div className="tech-icon">
              <img src="https://i.imgur.com/A8giVX5.png" alt="html framework" />
              <p>Git Workflow</p>
            </div>
          </div>
        </div>

        <div className="window-buttons">
            <div onClick={() => techWindow(false)}>OK</div>
            <div onClick={() => techWindow(false)}>Cancel</div>
            <div>Help</div>
          </div>
      </div>
    </div>
  );
};

export default TechWindow;
