import React, { Component } from "react";
import reactLogo from "../../assets/tech/React-Logo.png";

class AboutWindow extends Component {
  constructor() {
    super();
    this.state = {
      me: true,
      site: false,
      contact: false
    };
  }

  chooseProject = choice => {
    this.setState({ me: false, site: false, contact: false });
    this.setState({ [choice]: true });
  };

  displayProject = () => {
    if (this.state.me === true) {
      return (
        <div className="project-body">
          <div className="project-info">
            <div className="window-body">
              <h3>About the Author</h3>

              <img
                src="https://i.imgur.com/K8WF4FM.jpg"
                alt="about the author"
              />
              <p>
                &nbsp;&nbsp;&nbsp; I've always had a passion for creativity and
                problem solving. Whether it's composing music, creating digital
                designs or creative writing, I've always put my best work
                forward when a logical challenge relies on originality and
                innovation. My search for a career that would effectively
                combine both these aspects is what led me to web and software
                development.
              </p>
              <p>
                &nbsp;&nbsp;&nbsp; If you have any questions about the site,
                ideas you want to collaborate on, or crunchy Phish jams you need
                to discuss, don't hesitate to reach out! Thanks for stoppin' on
                by - Bill
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="project-body">
          <div className="project-info">
            <div className="window-body">
              <h3>What's Old is New</h3>
              <img src={reactLogo} alt="react logo" />
              <p>
                &nbsp;&nbsp;&nbsp; This site is designed to appear and behave
                much like Windows 98 used to. The folders on the 'desktop' are
                my projects, click each one for more information. Use the 'Start
                Menu' to navigate to other parts of the site like my skills,
                contact info etc. Despite the classic look, this site is built
                with React.js!
              </p>
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="window-container">
        <div className="window">
          <div className="window-title">
            <div>About</div>
            <div
              className="close-button"
              onClick={() => this.props.aboutWindow(false)}
            >
              X
            </div>
          </div>
          <div className="window-body">
            <div className="project-menu">
              <div className="project-header">
                <div
                  onClick={() => this.chooseProject("me")}
                  className={this.state.me ? "project active" : "project"}
                >
                  Bill Bain
                </div>
                <div
                  onClick={() => this.chooseProject("site")}
                  className={this.state.site ? "project active" : "project"}
                >
                  Site
                </div>
              </div>
              {this.displayProject()}
            </div>
            <div className="window-buttons">
              <div onClick={() => this.props.aboutWindow(false)}>OK</div>
              <div onClick={() => this.props.aboutWindow(false)}>Cancel</div>
              <div>Help</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutWindow;

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
