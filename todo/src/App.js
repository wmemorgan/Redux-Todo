import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import AppContainer from './components/DesignComponents/AppStyles'
import Header from './components/SharedComponents/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header />
        <TodoForm />
        <TodoList />
      </AppContainer>
    );
  }
}

export default App;
