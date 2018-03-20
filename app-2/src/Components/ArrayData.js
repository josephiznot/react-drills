import React, { Component } from "react";

class ArrayData extends Component {
  constructor() {
    super();
    this.state = {
      cars: ["Mercedes", "Jeep", "Mazda", "Toyota"]
    };
  }
  render() {
    let carsToDisplay = this.state.cars.map((element, index) => {
      return <li keys={index}>{element}</li>;
    });
    return <ul>{carsToDisplay}</ul>;
  }
}
export default ArrayData;
