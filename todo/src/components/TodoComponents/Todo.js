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

    return (
      <TodoContainer>
        <i completed={completed ? 'true' : 'false'} className="far fa-check-circle"></i>
        <li className={taskClassGroup}
          onClick={() => this.props.toggleComplete(id)}>
          {task}
        </li>
      </TodoContainer>
    )
  }
}

export default connect(null,{ toggleComplete })(Todo)