export const  ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"
export const DELETE_TODO = "DELETE_TODO"
export const  LOAD_STORAGE = "LOAD_STORAGE"
export const UPDATE_STORAGE = "UPDATE_STORAGE"

export const addTodo = task => {
  console.log(`invoke addTodo task is: ${task}`)
  return {
    type: ADD_TODO,
    payload: task
  }
}

export const toggleComplete = id => {
  return {
    type: TOGGLE_COMPLETE,  
    payload: id
  }
}

export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const loadLocalStorage = todos => {
  return {
    type: LOAD_STORAGE,
    payload: todos
  }
}

export const updateLocalStorage = () => {
  return {
    type: UPDATE_STORAGE
  }
}