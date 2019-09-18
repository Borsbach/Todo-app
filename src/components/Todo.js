import React, { Component } from 'react';
import DisplayList from './DisplayList';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
      count: 0,
      inputText: '',
      todos: []
  }
}

  handleDelete (itemToBeDeleted) {
    console.log(itemToBeDeleted);
    const newTodos = this.state.todos.filter((_item) => {
      return _item !==itemToBeDeleted
    });
    this.setState({ todos: newTodos });
  }

  toggle = () => {
    this.setState({ isClicked: !this.state.isClicked })
  }

  increase = () => {
    this.setState({ count: this.state.count + 1})
  }

  resetCount = () => {
    this.setState({ count: this.state.count === 0})
  }

  handleTextChange = (event) => {
    this.setState({ inputText: event.target.value.toUpperCase() })
  }

  handleComplete = () => {
    if (this.state.isClicked === false) {
      this.setState({ isClicked: true })
    } else 
    {this.setState({ isClicked: false})
  }
}

  submitTodo = (event) => {
    event.preventDefault()
    const currentTodos = this.state.todos
    currentTodos.push(this.state.inputText)
    console.log(currentTodos)
    this.setState({ todos: currentTodos, inputText: '' })
  }

  render () {
    return (
      <div className="Counter">
        <h1>Counter:</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.increase}>Increase Counter</button>
        <button onClick={this.resetCount}>Reset Counter</button>
        <button onClick={this.toggle}>{this.state.isClicked ? "Completes: Yes" : "Completed: No"}</button> 
        <div>
          <p>Please add a Todo...</p>
        </div>
        <form onSubmit={this.submitTodo}>
          <input type='text' onChange={this.handleTextChange} value={this.state.inputText}/>
          <button type="submit">Submit Todo</button>
        </form>
        <div>
          <p>My list of Todo's:</p>
        </div>
        <h2><DisplayList handleDelete={this.handleDelete.bind(this)} todos={ this.state.todos} handleComplete={ this.handleComplete } isClicked={this.state.isClicked} /></h2>
        
      </div>
    );
  }
}

export default Todo;