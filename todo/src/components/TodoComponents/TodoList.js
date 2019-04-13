import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadLocalStorage, updateLocalStorage } from '../../actions'

import Todo from './Todo'
import { TodoListContainer } from './TodoStyles'

class TodoList extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    console.log(`componentDidMount`)
    //Initialize localStorage
    let data
    if (localStorage.todos) {
      console.log(`localStorage.todos exists`)
      data = JSON.parse(localStorage.todos)
    } else {
      console.log(`creating localStorage.todos`)
      localStorage.setItem('todos', JSON.stringify(this.props.todos))
      data = JSON.parse(localStorage.todos)
    }

    console.log(`Initial localStorage.todos from parent:`, data)
    this.props.loadLocalStorage(data)
  }

  componentDidUpdate(prevProps, prevState) {
    // Synchronize state changes with localStorage
    if (prevProps.todos !== this.props.todos) {
      this.props.updateLocalStorage()
    }
  }


  render() {
    const { todos } = this.props
    return (
      <TodoListContainer>
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </TodoListContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { loadLocalStorage, updateLocalStorage })(TodoList)