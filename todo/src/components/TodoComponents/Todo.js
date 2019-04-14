import React, { Component } from 'react'
import ClassNames from 'classnames'
import { connect } from 'react-redux'

import { toggleComplete, updateTodo, deleteTodo } from '../../actions'
import { TodoContainer, DeleteContainer } from './TodoStyles'

class Todo extends Component {
  state = {
    task: this.props.todo.task,
    hidden: true,
    edit: false
  }

  inputChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleEdit() {
    this.setState(prevState => (
      { edit: !prevState.edit }
    ),
      () => console.log(`invoke toggleEdit`)
    )
  }

  updateTodo = (e) => {
    e.preventDefault()
    this.props.updateTodo({...this.props.todo, task: this.state.task})
    this.setState({ edit: false })
  }

  toggleComplete = (e, id) => {
    e.preventDefault()
    this.props.toggleComplete(id)
  }

  toggleDeleteBtn = e => {
    e.preventDefault()
    this.setState(prevState => ({
      hidden: !prevState.hidden
    }))
  }

  deleteTodo = (e, id) => {
    e.preventDefault()
    this.props.deleteTodo(id)
  }

  render() {
    const { id, task, completed } = this.props.todo
    const taskClassGroup = ClassNames({
      completed
    })

    const iconClassGroup = ClassNames({
      far: true,
      "fa-check-circle": true,
      completed
    })

    return (
      <TodoContainer 
        onDragOver={() => this.props.onDragOver(this.props.index)}>
        {/* Assign drag and drop handlers */}
        <div
          className="drag" 
          draggable
          onDragStart={(e) => this.props.onDragStart(e, this.props.index)}
          onDragEnd={this.props.onDragEnd}>
          <i className="fas fa-bars"></i>
        </div>
        <i onClick={(e) => this.toggleComplete(e,id)} className={iconClassGroup}></i>
        {!this.state.edit ?
          <li className={taskClassGroup}
            onClick={() => this.toggleEdit()}>
            {task}
          </li> :
          <form onSubmit={(e) => this.updateTodo(e)}>
            <input name="task" type="text"
              onChange={this.inputChangeHandler}
              value={this.state.task}
            />
          </form>
        }

      <DeleteContainer>
        {!this.state.edit ?
          <i onClick={this.toggleDeleteBtn} className="fas fa-ellipsis-v"></i> :
          <i className="far fa-edit" onClick={(e) => this.updateTodo(e)}></i>
        }     
        {
          this.state.hidden ? '' :
            <i className="fa fa-trash" 
              aria-hidden="true" 
              onClick={(e) => this.deleteTodo(e,id)}>
            </i>
        }
      </DeleteContainer>
      </TodoContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps,{ toggleComplete, updateTodo, deleteTodo })(Todo)