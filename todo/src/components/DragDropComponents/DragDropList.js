import React from 'react'

import { DragDropListContainer } from './DragDropStyles'

export default class DragDropList extends React.Component {
  state = {
    items: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
  };

  onDragStart = e => {
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragStart = (e, index) => {
    this.draggedItem = this.state.items[index];
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", e.target.parentNode);
    e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  onDragOver = index => {
    const draggedOverItem = this.state.items[index];

    // if the item is dragged over itself, ignore
    if (this.draggedItem === draggedOverItem) {
      return;
    }

    // filter out the currently dragged item
    let items = this.state.items.filter(item => item !== this.draggedItem);

    // add the dragged item after the dragged over item
    items.splice(index, 0, this.draggedItem);

    this.setState({ items });
  };

  onDragEnd = () => {
    this.draggedIdx = null;
  };

  render() {
    return (
      <DragDropListContainer>
        <main>
          <h3>List of items</h3>
          <ul>
            {this.state.items.map((item, idx) => (
              <li key={item} onDragOver={() => this.onDragOver(idx)}>
                <div className="drag" draggable onDragStart={this.onDragStart}>
                  <i className="fas fa-bars"></i>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </main>
      </DragDropListContainer>
    );
  }
}
