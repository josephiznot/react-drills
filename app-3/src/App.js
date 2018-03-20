import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Food from "./Components/Food";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Favorite Foods</h2>
        </div>
        <Food />
      </div>
    );
  }
}

export default App;
