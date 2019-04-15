import React, {Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, clearCompleted } from '../../actions'

import { FormContainer } from './TodoStyles'

class TodoForm extends Component {
  state = {
    newTask: ''
  }

  handleInput = e => {
    this.setState({ [e.target.name] : e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.newTask)
    this.setState({newTask: ''})
  }

  clearCompleted = e => {
    e.preventDefault()
    this.props.clearCompleted()
  }

  render() {
    return (
      <FormContainer>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="newTask" 
            placeholder="Enter task" 
            value={this.state.newTask}
            onChange={this.handleInput}
          />
          <button type="submit">+</button>
        </form>
      </FormContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { addTodo, clearCompleted })(TodoForm)