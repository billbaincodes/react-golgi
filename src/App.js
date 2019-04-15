import React, { Component } from "react";
import Start from "./components/Start";
import StartMenu from "./components/StartMenu";
import AboutWindow from "./components/Windows/AboutWindow.js"
import TechWindow from "./components/Windows/TechWindow.js"
import "./App.css";
import IconList from "./IconList";
import ResumeWindow from "./components/Windows/ResumeWindow";

class App extends Component {
  state = {
    menuToggle: false,
    aboutToggle: false,
    techToggle: false

  };

  menuToggle = () => {
    this.setState({ menuToggle: !this.state.menuToggle });
  };

  aboutWindow = (toggle) => {
    this.setState({ aboutToggle: toggle, menuToggle: false, techToggle: false });
  }
  techWindow = (toggle) => {
    this.setState({ techToggle: toggle, menuToggle: false, aboutToggle: false });
  }

  resumeWindow = (toggle) => {
    this.setState({ resumeToggle: toggle, menuToggle: false, aboutToggle: false });
  }


  render() {
    return (
      <div>
        <div>
          <IconList />
          {/* <ResumeWindow resumeWindow={this.resumeWindow}/> */}
          {this.state.techToggle && <TechWindow techWindow={this.techWindow}/> }
          {this.state.aboutToggle && <AboutWindow aboutWindow={this.aboutWindow}/> }
          {this.state.menuToggle && <StartMenu aboutWindow={this.aboutWindow} techWindow={this.techWindow} />}
          
          <Start menuToggle={this.menuToggle}/>

        </div>
        
      </div>
    );
  }
}

export default App;
