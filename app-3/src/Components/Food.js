import React, { Component } from "react";
class Food extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      foodTypes: ["Mexican", "American", "Italian", "Chinese"]
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ userInput: e });
  }
  render() {
    // console.log(this.state.userInput);
    let foodList = this.state.foodTypes
      .filter((element, index) => {
        return element.includes(this.state.userInput);
      })
      .map((element, index) => {
        return <h3 key={index}>{element}</h3>;
      });
    return (
      <div>
        <input
          type="text"
          placeholder="Filter types of food"
          onChange={event => this.handleChange(event.target.value)}
        />
        {foodList}
      </div>
    );
  }
}
export default Food;
