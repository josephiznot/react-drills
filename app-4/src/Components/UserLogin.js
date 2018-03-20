import React, { Component } from "react";

class UserLogin extends Component {
  constructor() {
    super();
    this.state = {
      userPassword: "",
      userName: ""
    };
    this.getUserName = this.getUserName.bind(this);
    this.getUserPassword = this.getUserPassword.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }
  getUserName(val) {
    this.setState({ userName: val });
  }
  getUserPassword(val) {
    this.setState({ userPassword: val });
  }
  loginUser() {
    alert(
      "Thank you " +
        this.state.userName +
        " for logging in with " +
        this.state.userPassword +
        "!"
    );
  }
  render() {
    return (
      <div>
        <h1>Please login</h1>
        <input
          type="text"
          placeholder="Username"
          onChange={event => this.getUserName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={event => this.getUserPassword(event.target.value)}
        />
        <button onClick={this.loginUser}>Login</button>
      </div>
    );
  }
}
export default UserLogin;
