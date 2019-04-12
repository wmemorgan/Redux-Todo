import React, { Component } from 'react'
import ClassNames from 'classnames'
import { connect } from 'react-redux'

import { toggleComplete } from '../../actions'
import { TodoContainer } from './TodoStyles'

class Todo extends Component {
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
      <TodoContainer>
        <i onClick={() => this.props.toggleComplete(id)} className={iconClassGroup}></i>
        <li className={taskClassGroup}
          onClick={() => this.props.toggleComplete(id)}>
          {task}
        </li>
      </TodoContainer>
    )
  }
}

export default connect(null,{ toggleComplete })(Todo)