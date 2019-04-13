import uuid from 'uuid'
import { ADD_TODO, TOGGLE_COMPLETE, 
  DELETE_TODO, LOAD_STORAGE, UPDATE_STORAGE } from '../actions'

const initialState = {
  todos: []
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

    case LOAD_STORAGE:
      return {
        ...state,
        todos: [
          ...action.payload
        ]
      }

    case UPDATE_STORAGE:
      localStorage.setItem('todos', JSON.stringify(state.todos))
      return state
      
    default:
      return state
  }
}