import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import '../../App.css'

class TodoList extends Component {
  state = {
    todos: []
  }

  render() {
    const { todos } = this.props
    return (
      <div className="todo-list-container">
        <ul className="todo-list">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {})(TodoList)