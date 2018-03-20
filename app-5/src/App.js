import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image
          imgSource={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/USCurrency_Federal_Reserve.jpg/210px-USCurrency_Federal_Reserve.jpg"
          }
        />
      </div>
    );
  }
}

export default App;
