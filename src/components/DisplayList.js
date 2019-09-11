import React, { Component } from'react';

class DisplayList extends Component {
  render() {
    return <ul>
      { this.props.todos.map((todos, index) => {
        return <li key={todos}>{ todos } <button href='#' onClick={ this.props.handleDelete.bind(null, todos) }>Delete</button></li>        
      })}
    </ul>
    
  }
}

export default DisplayList