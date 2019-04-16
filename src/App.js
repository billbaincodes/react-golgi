import React, { Component } from "react";
import Start from "./components/Start";
import StartMenu from "./components/StartMenu";
import AboutWindow from "./components/Windows/AboutWindow.js"
import TechWindow from "./components/Windows/TechWindow.js"
import ProjectWindow from "./components/Windows/ProjectWindow.js"
import "./App.css";
import IconList from "./components/IconList.js"

class App extends Component {
  state = {
    menuToggle: false,
    aboutToggle: false,
    techToggle: false,
    projectToggle: true
  };

  menuToggle = () => {
    this.setState({ menuToggle: !this.state.menuToggle });
  };

  aboutWindow = (toggle) => {
    this.setState({ aboutToggle: toggle, menuToggle: false, techToggle: false, projectWindow: false });
  }
  techWindow = (toggle) => {
    this.setState({ techToggle: toggle, menuToggle: false, aboutToggle: false, projectWindow: false });
  }
  projectWindow = (toggle) => {
    this.setState({ projectToggle: toggle, menuToggle: false, aboutToggle: false, techToggle: false });
  }

  render() {
    return (
      <div>
        <div>
          <IconList />
          {this.state.projectToggle && <ProjectWindow projectWindow={this.projectWindow} />}
          {this.state.techToggle && <TechWindow techWindow={this.techWindow}/> }
          {this.state.aboutToggle && <AboutWindow aboutWindow={this.aboutWindow}/> }
          {this.state.menuToggle && <StartMenu aboutWindow={this.aboutWindow} techWindow={this.techWindow} projectWindow={this.projectWindow} />}
          
          <Start menuToggle={this.menuToggle}/>

        </div>
        
      </div>
    );
  }
}

export default App;
