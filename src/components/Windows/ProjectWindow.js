import React, { Component } from "react";
import { throws } from "assert";

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
          <h1>flô</h1>
          <h3> Music/Fitness Mobile App</h3>
          <iframe height="480px" width="270px" src="https://www.youtube-nocookie.com/embed/0B5-3Z14w04" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <p>
            
          </p>
        </div>
      );
    } else if (this.state.joh === true) {
      return (
        <div className="project-body">
        <p>
          the joy of hiking is about hiking as fast as you possibly fucking can
        </p>
      </div>
      )
    } else {
      return (
        <div className="project-body">
        <p>
          twin peaks gazette is about being killed by bob as fast as you possibly fucking can
        </p>
      </div>
      )
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
                  Twin Peaks Gazette
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
