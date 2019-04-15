import uuid from 'uuid'
import { ADD_TODO, TOGGLE_COMPLETE, CLEAR_COMPLETED, UPDATE_TODO,
  DELETE_TODO, LOAD_STORAGE, UPDATE_STORAGE, SORT_TODOS } from '../actions'

const initialState = {
  todos: [
    {
     id: 1,
     task: 'Buy milk',
     completed: false 
    },
    {
     id: 2,
     task: 'Walk the dog',
     completed: false 
    },
    {
     id: 3,
     task: 'Take out the trash',
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

    case CLEAR_COMPLETED:
      return {
        ...state,
        todos: [
          ...state.todos.filter(todo => !todo.completed)
        ]
      }

    case UPDATE_TODO:
      return {
        ...state,
        todos: [
          ...state.todos.map(todo => (
            todo.id === action.payload.id ?
              action.payload : todo
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

    case SORT_TODOS:
      return {
        ...state,
        todos: [
          ...action.payload
        ]
      }
      
    default:
      return state
  }
}