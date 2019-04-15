import React, { Component } from "react";
import Start from "./components/Start";
import StartMenu from "./components/StartMenu";
import AboutWindow from "./components/Windows/AboutWindow.js"
import TechWindow from "./components/Windows/TechWindow.js"
import "./App.css";
import IconList from "./IconList";

class App extends Component {
  state = {
    menuToggle: false,
    aboutToggle: false,
    techToggle: true

  };

  menuToggle = () => {
    this.setState({ menuToggle: !this.state.menuToggle });
  };

  aboutWindow = (toggle) => {
    this.setState({ aboutToggle: toggle, menuToggle: false });
  }


  render() {
    return (
      <div>
        <div>
          <IconList />
          <TechWindow />
          {this.state.aboutToggle && <AboutWindow aboutWindow={this.aboutWindow}/> }
          {this.state.menuToggle && <StartMenu aboutWindow={this.aboutWindow} />}
          
          <Start menuToggle={this.menuToggle} />

        </div>
        
      </div>
    );
  }
}

export default App;
