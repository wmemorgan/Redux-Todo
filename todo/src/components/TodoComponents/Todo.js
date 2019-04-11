import React, { Component } from 'react'
import ClassNames from 'classnames'
import { connect } from 'react-redux'

import { toggleComplete } from '../../actions'

class Todo extends Component {
  render() {
    const { task, completed } = this.props.todo
    const taskClassGroup = ClassNames({
      completed
    })

    return (
      <div className="todo-container">
        <li className={taskClassGroup} 
          onClick={() => this.props.toggleComplete(this.props.todo)}>
          {task}
        </li>
      </div>
    )
  }
}

export default connect(null,{ toggleComplete })(Todo)