import React from "react";
import bootstrapLogo from "../../assets/tech/Bootstrap-Logo.png";
import reactLogo from "../../assets/tech/React-Logo.png";

import jsLogo from "../../assets/tech/JavaScript-Logo.jpg"
import restLogo from "../../assets/tech/RestAPI-Logo.png"
import gitLogo from "../../assets/tech/Git-Logo.png"
import nodeLogo from "../../assets/tech/NodeJS-Logo.png"

import pgLogo  from "../../assets/tech/PostgreSQL-Logo.png"
import knexLogo  from "../../assets/tech/KnexJS-Logo.png"
import htmlLogo  from "../../assets/tech/HTML5-Logo.png"
import cssLogo  from "../../assets/tech/CSS3-Logo.png"


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
              JavaScript
            </div>
            <div className="tech-icon">
              <img src={reactLogo} alt="bootstrap framework" />
              React.js
            </div>
            <div className="tech-icon">
              <img src={bootstrapLogo} alt="bootstrap framework" />
              Bootstrap
            </div>
            <div className="tech-icon">
              <img src={htmlLogo} alt="html framework" />
              HTML5
            </div>
            <div className="tech-icon">
              <img src={cssLogo} alt="css framework" />
              CSS3
            </div>
          </div>
        </div>

        <div class="window-body">
          <h3 className="window-headline">Back End</h3>
          <div className="tech-list">
            <div className="tech-icon">
              <img src={nodeLogo} alt="node framework" />
              Node.js
            </div>
            <div className="tech-icon">
              <img src={restLogo} alt="bootstrap framework" />
              RESTful API
            </div>
            <div className="tech-icon">
              <img src={pgLogo} alt="postgreSQL" />
              PostgreSQL
            </div>
            <div className="tech-icon">
              <img src={gitLogo} alt="postgreSQL" />
              Git
            </div>
            <div className="tech-icon">
              <img src={knexLogo} alt="postgreSQL" />
              Knex
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
