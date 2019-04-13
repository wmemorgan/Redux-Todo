import React, { Component } from 'react'
import ClassNames from 'classnames'
import { connect } from 'react-redux'

import { toggleComplete, deleteTodo } from '../../actions'
import { TodoContainer, DeleteContainer } from './TodoStyles'

class Todo extends Component {
  state = {
    hidden: true
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
        <li className={taskClassGroup}
          onClick={(e) => this.toggleComplete(e,id)}>
          {task}
        </li>
      <DeleteContainer>
        {/* Toggle delete button when pressed */}
        <i onClick={this.toggleDeleteBtn} className="fas fa-ellipsis-v"></i>
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

export default connect(null,{ toggleComplete, deleteTodo })(Todo)