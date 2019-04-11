import React, { Component } from 'react'
import { connect } from 'react-redux'

import Todo from './Todo'
import { TodoListContainer } from './TodoStyles'
// import '../../App.css'

class TodoList extends Component {
  state = {
    todos: []
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

export default connect(mapStateToProps, {})(TodoList)