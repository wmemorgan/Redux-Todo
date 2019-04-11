import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import {  reducer } from './reducers'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './components/DesignComponents/GlobalStyle'
import theme from './components/DesignComponents/theme'

import './index.css';
import App from './App';

const store = createStore(reducer)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>, 
  document.getElementById('root'));


