import React, {Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

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

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text"
            name="newTask" 
            placeholder="Enter task" 
            value={this.state.newTask}
            onChange={this.handleInput}
          />
          <button type="submit">Add Task</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { addTodo })(TodoForm)