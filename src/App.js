import React, { Component } from "react";
import Start from "./components/Start";
import StartMenu from "./components/StartMenu";
import VideoWindow from "./components/Windows/VideoWindow";
import AboutWindow from "./components/Windows/AboutWindow.js";
import TechWindow from "./components/Windows/TechWindow.js";
import ProjectWindow from "./components/Windows/ProjectWindow.js";
import "./App.css";
import IconList from "./components/IconList.js";
import Winamp from './components/Winamp.js'

class App extends Component {
  styles = [
    "background: linear-gradient(#000184, #fffff3)",
    "border: 1px solid #000184",
    "color: white",
    "text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3)",
    "line-height: 30px"
  ].join(";");

  componentDidMount() {
    this.timeFinder();
    setInterval(this.timeFinder, 6000);
    this.windowToggles();
    console.log('%c Thanks for stoppin\' on by! - Bill ', this.styles);
  }

  state = {
    menuToggle: false,
    aboutToggle: false,
    techToggle: false,
    projectToggle: false,
    windowToggle: false,
    currentTime: "11:25",
    windowToggles: {
      menuToggle: false,
      aboutToggle: false,
      techToggle: false,
      projectToggle: false,
      windowToggle: false,
      video: false,
      winamp: false,
    },
  };

  timeFinder = () => {
    let date = new Date();
    let hour = date.getHours();
    if (hour > 12) {
      hour -= 12;
    }
    let minute =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let time = hour + ":" + minute;
    this.setState({ currentTime: time });
  };

  menuToggle = () => {
    this.setState({ menuToggle: !this.state.menuToggle });
  };


  windowToggles = selection => {
    let toggles = {...this.state.windowToggles}
    for (let toggle in toggles) {
      if (toggle === selection) { 
        toggles[toggle] = !toggles[toggle];
      } else { toggles[toggle] = false}
    }
    this.setState({ windowToggles: toggles })
  }



  aboutWindow = toggle => {
    this.setState({
      aboutToggle: toggle,
      menuToggle: false,
      techToggle: false,
      projectWindow: false,
      videoToggle: false
    });
  };
  techWindow = toggle => {
    this.setState({
      techToggle: toggle,
      menuToggle: false,
      aboutToggle: false,
      projectWindow: false,
      videoToggle: false
    });
  };
  projectWindow = toggle => {
    this.setState({
      projectToggle: toggle,
      menuToggle: false,
      aboutToggle: false,
      techToggle: false,
      videoToggle: false
    });
  };
  videoWindow = toggle => {
    this.setState({
      videoToggle: toggle,
      projectToggle: false,
      menuToggle: false,
      aboutToggle: false,
      techToggle: false
    });
  };

  openWinamp() {
    this.webamp.reopen()
  }

  render() {
    return (
      <div>
        <IconList
          projectWindow={this.projectWindow}
          windowToggles={this.windowToggles}
        />

        {this.state.windowToggles.winamp && (
          <Winamp windowToggles={this.windowToggles} />
        )}

        {this.state.projectToggle && (
          <ProjectWindow projectWindow={this.projectWindow} />
        )}
        {this.state.techToggle && <TechWindow techWindow={this.techWindow} />}
        {this.state.aboutToggle && (
          <AboutWindow aboutWindow={this.aboutWindow} />
        )}
        {this.state.windowToggles.video && (
          <VideoWindow
            title="Myst"
            video="https://www.youtube.com/embed/D30r0iRH73Q?controls=0&amp;start=96"
            videoWindow={this.videoWindow}
            windowToggles={this.windowToggles}
          />
        )}
        {this.state.menuToggle && (
          <StartMenu
            menuToggle={this.menuToggle}
            aboutWindow={this.aboutWindow}
            techWindow={this.techWindow}
            projectWindow={this.projectWindow}
          />
        )}
        <Start
          currentTime={this.state.currentTime}
          menuToggle={this.menuToggle}
        />
      </div>
    );
  }
}

export default App;
