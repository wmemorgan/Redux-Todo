import React, { Component } from 'react';

import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'

import { AppContainer, AppWrapper } from './components/DesignComponents/AppStyles'
import Header from './components/SharedComponents/Header'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppWrapper>
          <Header />
          <TodoForm />
          <TodoList />
        </AppWrapper>
      </AppContainer>
    );
  }
}

export default App;
