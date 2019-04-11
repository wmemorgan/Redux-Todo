import React from 'react'

const Todo = props => {
  return (
    <div className="todo-container">
      <li>{props.value}</li>
    </div>
  )
}

export default Todo