import React, { Component } from 'react';

class Todo extends Component {
  state = {
    count: 0,
    inputText: '',
    todos: []
  }

  increase = () => {
    this.setState({ count: this.state.count + 1})
  }

  handleTextChange = (e) => {
    this.setState({ inputText: e.target.value })
  }

  submitTodo = (e) => {
    e.preventDefault()
    const currentTodos = this.state.todos
    currentTodos.push(this.state.inputText)
    console.log(currentTodos)
    this.setState({ todos: currentTodos, inputText: '' })
  }

  render () {
    return (
      <div>
        <h1>Count:</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.increase}>Increase Counter</button>
          <form onSubmit={this.submitTodo}>
          <input 
          type='text' 
          onChange={this.handleTextChange}
          value={this.state.inputText}/>
            <button type="submit">Add Todo</button>
          </form>
        {
          this.state.todos.map((todo, index) => {
            return (
              <p key={index}>{todo}</p>
            )
          })
        }
      </div>
    )
  }
}

export default Todo;