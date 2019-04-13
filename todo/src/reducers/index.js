import uuid from 'uuid'
import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from '../actions'

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
      let newTask =  {
        id: uuid.v4(),
        task: action.payload,
        completed: false
      }

      return {
        ...state,
        todos: [...state.todos, newTask]
      }

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => (
            todo.id === action.payload ? 
            {...todo, completed: !todo.completed } : todo
          ))
        ]
      }

    case DELETE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => todo.id !== action.payload )
        ]
      }
      
    default:
      return state
  }
}