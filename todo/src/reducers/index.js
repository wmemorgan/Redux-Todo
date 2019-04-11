
import { ADD_TODO, TOGGLE_COMPLETE } from '../actions'

const initialState = {
  todos: [
    {
      id: 1,
      task: 'Pick up milk',
      completed: false
    },
    {
      id: 2,
      task: 'Walk the dog',
      completed: false
    },
  ]
}

export const reducer = (state = initialState, action) => {
  console.log(`invoke reducer payload is: `, action.payload)
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => (
            todo.id === action.payload.id ? 
            action.payload : todo
          ))
        ]
      }
    default:
      return state
  }
}