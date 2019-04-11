
import { ADD_TODO } from '../actions'
// import TOGGLE_COMPLETE from '../actions'

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
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state
  }
}