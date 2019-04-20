import React, { Component } from "react";
import bootstrapLogo from "../../assets/tech/Bootstrap-Logo.png";
import reactLogo from "../../assets/tech/React-Logo.png";
import vueLogo from "../../assets/tech/58482acecef1014c0b5e4a1e.png";
import jsLogo from "../../assets/tech/JavaScript-Logo.jpg";
import restLogo from "../../assets/tech/RestAPI-Logo.png";
import gitLogo from "../../assets/tech/Git-Logo.png";
import nodeLogo from "../../assets/tech/NodeJS-Logo.png";
import pgLogo from "../../assets/tech/PostgreSQL-Logo.png";
import knexLogo from "../../assets/tech/KnexJS-Logo.png";
import htmlLogo from "../../assets/tech/HTML5-Logo.png";
import cssLogo from "../../assets/tech/CSS3-Logo.png";

class ProjectWindow extends Component {
  constructor() {
    super();
    this.state = {
      flo: true,
      joh: false,
      tpg: false
    };
  }

  chooseProject = choice => {
    this.setState({ flo: false, joh: false, tpg: false });
    this.setState({ [choice]: true });
  };

  displayProject = () => {
    if (this.state.flo === true) {
      return (
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
            </div> */}
          </div>
          <p>
            Running app that plays increasingly intense music the faster you
            run. Front end is built with Vue Native, Expo and Native Base. Uses
            Expo's Permissions API to access device location to calculate speed.
          </p>
        </div>
      );
    } else if (this.state.joh === true) {
      return (
        <div className="project-body">
          <p>
            the joy of hiking is about hiking as fast as you possibly fucking
            can
          </p>
        </div>
      );
    } else {
      return (
        <div className="project-body">
          <p>
            twin peaks gazette is about being killed by bob as fast as you
            possibly fucking can
          </p>
        </div>
      );
    }
  };

  render() {
    return (
      <div class="window-container">
        <div class="window">
          <div class="window-title">
            <div>My Projects</div>
            <div
              class="close-button"
              onClick={() => this.props.projectWindow(false)}
            >
              X
            </div>
          </div>
          <div class="window-body">
            <h3 className="window-headline">About Me</h3>

            <div className="project-menu">
              <div className="project-header">
                <div
                  onClick={() => this.chooseProject("flo")}
                  className={this.state.flo ? "project active" : "project"}
                >
                  flô
                </div>
                <div
                  onClick={() => this.chooseProject("joh")}
                  className={this.state.joh ? "project active" : "project"}
                >
                  The Joy of Hiking
                </div>
                <div
                  onClick={() => this.chooseProject("tpg")}
                  className={this.state.tpg ? "project active" : "project"}
                >
                  TP Gazette
                </div>
              </div>

              {this.displayProject()}
            </div>
            <div className="window-buttons">
              <div onClick={() => this.props.projectWindow(false)}>OK</div>
              <div onClick={() => this.props.projectWindow(false)}>Cancel</div>
              <div>Help</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectWindow;
