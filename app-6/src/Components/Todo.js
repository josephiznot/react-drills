import React, { Component } from "react";
export default function Todo(props) {
  let taskList = props.taskProp;
  taskList = taskList.map((element, index) => {
    return <li key={index}>{element}</li>;
  });
  return <ul style={{ listStyleType: "none" }}>{taskList}</ul>;
}
