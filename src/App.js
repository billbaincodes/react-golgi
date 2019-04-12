import React, { Component } from "react";
import Start from "./components/Start";
import StartMenu from "./components/StartMenu";
import Window from "./components/Window.js"

import "./App.css";
import IconList from "./IconList";

class App extends Component {
  state = {
    menuToggle: false,
    aboutToggle: false
  };

  menuToggle = () => {
    this.setState({ menuToggle: !this.state.menuToggle });
  };

  aboutWindow = () => {
    this.setState({ aboutToggle: !this.state.aboutToggle, menuToggle: false });
    console.log("holy shit!!! ABOUT")
  }


  render() {
    return (
      <div>
        <div>
          <IconList />
          {this.state.aboutToggle && <Window /> }
          {this.state.menuToggle && <StartMenu aboutWindow={this.aboutWindow} />}
          
          <Start menuToggle={this.menuToggle} />

        </div>
        
      </div>
    );
  }
}

export default App;
