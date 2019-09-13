import React, { Component } from "react";

class DisplayList extends Component {
  render() {
    let listStyle = {};
    if (this.props.isClicked == true) {
      listStyle = { textDecoration: "line-through" };
    } else {
      listStyle = { textDecoration: "none" };
    }

    return (
      <ul>
        {this.props.todos.map((todos, index) => {
          return (
            <li style={listStyle} key={todos}>
              {todos}{" "}
              <button href="#" onClick={this.props.handleDelete.bind(null, todos)}>Delete</button>
              <button onClick={this.props.handleComplete}>Complete</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default DisplayList;
