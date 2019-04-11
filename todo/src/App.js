import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}

export default App;
