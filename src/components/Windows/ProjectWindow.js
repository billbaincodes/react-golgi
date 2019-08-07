import React, { Component } from "react";
import bootstrapLogo from "../../assets/tech/Bootstrap-Logo.png";
import reactLogo from "../../assets/tech/React-Logo.png";
import vueLogo from "../../assets/tech/58482acecef1014c0b5e4a1e.png";

const ProjectWindow = ({ projectWindow }) => {
  return (
    <div className="window-container">
      <div className="window">
        <div className="window-title">
          <div>Music/Fitness Android App</div>
          <div className="close-button" onClick={() => projectWindow(false)}>
            X
          </div>
        </div>

        <div className="window-body">
          <div className="project-title">
            flô
            {/* <span className="project-subtitle"> Music/Fitness Android App</span> */}
          </div>
          <p>
            flô is a running app that plays increasingly intense music the
            faster you move. Front end is built with Vue Native, Expo and Native
            Base. Uses Expo's Permissions API to access device location to
            calculate speed.
          </p>
          <p>
            <b>Built with:</b> Vue Native, Expo, Native Base, oAuth
          </p>
          <div className="project-data">
            <iframe
              src="https://www.youtube-nocookie.com/embed/0B5-3Z14w04"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div />
          </div>
        </div>
        <div className="window-buttons">
          <div onClick={() => projectWindow(false)}>OK</div>
          <div onClick={() => projectWindow(false)}>Cancel</div>
          <div>Help</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectWindow;

/*
        <div className="project-body">
          <div className="project-info">
            <div className="project-demo">
              <h1>flô</h1>
              <h3> Music/Fitness Mobile App</h3>
              <iframe
                height="480px"
                width="270px"
                src="https://www.youtube-nocookie.com/embed/0B5-3Z14w04"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
              <div />
            </div>
            {/* <div className="tech-used">
              <h3>tech</h3>
              <div className="tech-used-list">
                <img height="38px" src={vueLogo} alt="vue framework" />
                <img height="38px" src={vueLogo} alt="vue framework" />
                <img height="38px" src={vueLogo} alt="vue framework" />
                <img height="38px" src={vueLogo} alt="vue framework" />
              </div>
            </div> 
            </div>
            <p>
              Running app that plays increasingly intense music the faster you
              run. Front end is built with Vue Native, Expo and Native Base. Uses
              Expo's Permissions API to access device location to calculate speed.
            </p>
          </div>
*/
