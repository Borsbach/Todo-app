import React from 'react';
import './App.css';
import Header from "./components/Header";
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <Header subtitle="This is my first Todo App!"/>
      <Todo />
    </div>
  );
}

export default App;
