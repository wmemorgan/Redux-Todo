import React, { Component } from 'react';

import { DragContainer } from './DragDropStyles'

export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      {
        name: "Learn Angular",
        category: "wip",
        bgcolor: "yellow",
        order: 1
      },
      {
        name: "Learn React",
        category: "wip",
        bgcolor: "pink",
        order: 2
      },
      {
        name: "Learn Vue",
        category: "complete",
        bgcolor: "skyblue",
        order: 3
      }
    ]
  }

  onDragStart = (e, id) => {
    console.log(`dragstart: `, id)
    e.dataTransfer.setData(`id`, id)
  }

  onDragOver = e => {
    e.preventDefault()
  }

  onDrop = (e, order) => {
    let id = e.dataTransfer.getData('id')
    let tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.order = order
      }
      return task
    })

    this.setState({
      ...this.state,
      tasks
    })
  }

  render() {
    const tasks = {
      wip: [],
      complete: [],
      taskList: []
    }

    this.state.tasks.forEach(task => {
      tasks[task.category].push(
        <div 
          key={task.name}
          onDragStart = {e => this.onDragStart(e, task.name)}
          draggable
          className="draggable"
          style={{background: task.bgcolor}}>
          {task.name}
        </div>
      )
    })

    this.state.tasks.forEach(task => {
      tasks.taskList[task.order] = (
        <div
          key={task.name}
          onDragStart={e => this.onDragStart(e, task.name)}
          onDrop={(e) => { this.onDrop(e, task.order) }}
          draggable
          className="draggable"
          style={{ background: task.bgcolor }}
          order={task.order}>
          {task.name}
        </div>
      )
    })

    return (
      <DragContainer>
        <h2 className="header">DRAG & DROP DEMO</h2>
        <div className="wip"
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => { this.onDrop(e, "wip") }}>
          <span className="task-header">Ordered List</span>
          {tasks.taskList}
        </div> 
        <div 
          className="droppable" 
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, 'complete')}>
          <span className="task-header">COMPLETED</span>
          {tasks.complete}
        </div>
      </DragContainer>
    );
  }
}