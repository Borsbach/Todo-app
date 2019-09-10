import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <Header subtitle="A brand new app"/>
      <Todo />
    </div>
  );
}

export default App;
