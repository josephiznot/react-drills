import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Components/Todo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      taskList: []
    };
    this.handleTasks = this.handleTasks.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  handleTasks(e) {
    this.setState({
      task: e
    });
  }
  addTask() {
    let { task, taskList } = this.state;
    taskList.push(task);
    this.setState({
      task: task,
      taskList: taskList
    });
  }

  render() {
    console.log(this.state.taskList);
    return (
      <div className="App">
        <h1>Joe's Task List</h1>
        <input
          placeholder="insert task"
          type="text"
          onChange={e => this.handleTasks(e.target.value)}
        />
        <button placeholder="Add a task" onClick={this.addTask}>
          Submit
        </button>
        <Todo taskProp={this.state.taskList} />
      </div>
    );
  }
}

export default App;
