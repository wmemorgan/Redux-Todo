import React from 'react'

import Todo from './Todo'

const TodoList = props => {
  const { todos } = props
  return (
    <div className="todo-list-container">
      <ol className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} />
        ))}
      </ol>
    </div>
  )
}

export default TodoList