import uuid from 'uuid'

export const  ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"

export const addTodo = todo => {
  return {
    type: ADD_TODO,
    payload: {
      id: uuid.v4(),
      value: todo.value,
      completed: false
    }
  }
}

export const toggleComplete = todo => {
  return {
    type: TOGGLE_COMPLETE,  
    payload: {
      ...todo,
      completed: !todo.completed
    }
  }
}