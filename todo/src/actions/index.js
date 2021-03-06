export const  ADD_TODO = "ADD_TODO"
export const TOGGLE_COMPLETE = "TOGGLE_COMPLETE"
export const CLEAR_COMPLETED = "CLEAR_COMPLETED"
export const UPDATE_TODO = "UPDATE_TODO"
export const DELETE_TODO = "DELETE_TODO"
export const LOAD_STORAGE = "LOAD_STORAGE"
export const UPDATE_STORAGE = "UPDATE_STORAGE"
export const SORT_TODOS = "SORT_TODOS"

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

export const clearCompleted = () => {
  return {
    type: CLEAR_COMPLETED
  }
}

export const updateTodo = todo => {
  return {
    type: UPDATE_TODO,
    payload: todo
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

export const sortTodos = todos => {
  return {
    type: SORT_TODOS,
    payload: todos
  }
}