import React from "react";

import reactLogo from "../../assets/tech/React-Logo.png";
import angularLogo from "../../assets/tech/angularLogo.svg"
import tsLogo from "../../assets/tech/tsLogo.png"
import nodeLogo from "../../assets/tech/NodeJS-Logo.png"
import pgLogo  from "../../assets/tech/PostgreSQL-Logo.png"
import knexLogo  from "../../assets/tech/KnexJS-Logo.png"
import awsLogo from '../../assets/tech/AWSlogo.png'
import sassLogo from '../../assets/tech/sassLogo.png'
import gitLogo from '../../assets/tech/gitLogo.png'
import vuenLogo from '../../assets/tech/vuenLogo.png'

const TechWindow = ({ techWindow }) => {
  return (
    <div className="window-container">
      <div className="window">
        <div className="window-title">
          <div>Tools & Technologies</div>
          <div className="close-button" onClick={() => techWindow(false)}>
            X
          </div>
        </div>

        <div className="window-body">
          <h3 className="window-headline">Front End</h3>
          <div className="tech-list">
            <a target='_blank' rel='noopener noreferrer' href='https://www.typescriptlang.org/'>
              <div className="tech-icon">
                <img src={tsLogo} alt="bootstrap framework" />
                <p>TypeScript</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://angular.io/'>
              <div className="tech-icon">
                <img src={angularLogo} alt="html framework" />
                <p>Angular</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://reactjs.org/'>
              <div className="tech-icon">
                <img src={reactLogo} alt="bootstrap framework" />
                <p>React</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://vue-native.io/'>
              <div className="tech-icon">
                <img src={vuenLogo} alt="html framework" />
                <p>Vue Native</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://sass-lang.com/'>
              <div className="tech-icon">
                <img src={sassLogo} alt="html framework" />
                <p>Sass</p>
              </div>
            </a>
          </div>
        </div>

        <div className="window-body">
          <h3 className="window-headline">Back End</h3>
          <div className="tech-list">
            <a target='_blank' rel='noopener noreferrer' href='https://nodejs.org/en/about/'>
              <div className="tech-icon">
                <img src={nodeLogo} alt="bootstrap framework" />
                <p>Node</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://aws.amazon.com/'>
              <div className="tech-icon">
                <img src={awsLogo} alt="bootstrap framework" />
                <p>AWS</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://www.postgresql.org/'>
              <div className="tech-icon">
                <img src={pgLogo} alt="bootstrap framework" />
                <p>PostgreSQL</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='http://knexjs.org/'>
              <div className="tech-icon">
                <img src={knexLogo} alt="bootstrap framework" />
                <p>Knex</p>
              </div>
            </a>
            <a target='_blank' rel='noopener noreferrer' href='https://git-scm.com/'>
              <div className="tech-icon">
                <img src={gitLogo} alt="html framework" />
                <p>Git Workflow</p>
              </div>
            </a>
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
