import React from 'react'

const TodoForm = props => {
  return (
    <div className="form-container">
      <form>
        <input type="text" placeholder="Enter task"/>
        <button>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm