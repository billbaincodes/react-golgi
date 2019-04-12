import React, { Component } from 'react';
import Home from "./components/Home.js"
import Start from "./components/Start.js"
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Start />
      </div>
    );
  }
}

export default App;
