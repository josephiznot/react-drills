import React, { Component } from "react";

class TextBox extends Component {
  constructor() {
    super();
    this.state = {
      header: "Type into the text box"
    };
    this.handleText = this.handleText.bind(this);
  }
  handleText(val) {
    this.setState({
      header: val
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.header}</h1>;
        <input
          placeholder="Type in box"
          onChange={e => this.handleText(e.target.value)}
        />
      </div>
    );
  }
}
export default TextBox;
