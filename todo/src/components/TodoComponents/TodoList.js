import React, { Component } from 'react'
import { connect } from 'react-redux'

import { loadLocalStorage, updateLocalStorage, sortTodos } from '../../actions'

import Todo from './Todo'
import { TodoListContainer } from './TodoStyles'

class TodoList extends Component {
  /* 
    Drag and Drop functionality was adapted from a
    tutorial by Seif Ghezala
    https://github.com/siffogh/drag-and-drop-article
  */  
  onDragStart = (e, index) => {
    this.draggedTodo = this.props.todos[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverTodo = this.props.todos[index];
    // if the item is dragged over itself, ignore
    if (this.draggedTodo === draggedOverTodo) {
      return;
    }

    // filter out the currently dragged item
    let newTodos = this.props.todos.filter(item => item !== this.draggedTodo);
 
    // add the dragged item after the dragged over item
    newTodos.splice(index, 0, this.draggedTodo);
   
    // update state with newly sorted list
    this.props.sortTodos(newTodos)
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  componentDidMount() {
    console.log(`componentDidMount`)
    //Initialize localStorage
    let data
    if (localStorage.todos) {
      console.log(`localStorage.todos exists`)
      data = JSON.parse(localStorage.todos)
    } else {
      console.log(`creating localStorage.todos`)
      localStorage.setItem('todos', JSON.stringify(this.props.todos))
      data = JSON.parse(localStorage.todos)
    }

    console.log(`Initial localStorage.todos from parent:`, data)
    this.props.loadLocalStorage(data)
  }

  componentDidUpdate(prevProps, prevState) {
    // Synchronize state changes with localStorage
    if (prevProps.todos !== this.props.todos) {
      this.props.updateLocalStorage()
    }
  }


  render() {
    const { todos } = this.props
    return (
      <TodoListContainer>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <Todo 
              key={todo.id} 
              todo={todo}
              index={index}
              draggable 
              onDragOver={this.onDragOver}
              onDragStart={this.onDragStart}
              onDragEnd={this.onDragEnd}
            />
          ))}
        </ul>
      </TodoListContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, { loadLocalStorage, updateLocalStorage, sortTodos })(TodoList)