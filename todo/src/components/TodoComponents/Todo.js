import React, { Component } from 'react'
import ClassNames from 'classnames'
import { connect } from 'react-redux'

import { toggleComplete } from '../../actions'
import { TodoContainer } from './TodoStyles'

class Todo extends Component {
  render() {
    const { task, completed } = this.props.todo
    const taskClassGroup = ClassNames({
      completed
    })

    return (
      <TodoContainer>
        <input type="checkbox"/>
        <li className={taskClassGroup}
          onClick={() => this.props.toggleComplete(this.props.todo)}>
          {task}
        </li>
      </TodoContainer>
    )
  }
}

export default connect(null,{ toggleComplete })(Todo)