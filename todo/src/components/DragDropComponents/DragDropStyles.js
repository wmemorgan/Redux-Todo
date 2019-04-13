import styled from 'styled-components'

export const DragContainer = styled.div`
  text-align: center;

  .wip {
    position: absolute;
    width: 150px;
    height: 100vh;
    left: 0;
    top: 10
    background: lightgray;
    border-right: 1px dotted;
  }

  .header {
    display: inline-block;
    margin: 0;
    padding: 0;
    padding: 0;
    background: #E0E0E0;
    width: 100%;
  }

  .task-header {
    display: inline-block;
    background: skyblue;
    width: 100%;
  }

  .droppable {
    position: absolute;
    width: 150px;
    height: 100vh;
    right: 0;
    top: 10
    background: #9E9E9E;
    border-right: 1px dotted;
  }

  .draggable {
    width: 100px;
    height: 100px;
    background: yellow;
    margin: 5px auto;
    line-height: 5em;
  }

`
export const DragDropListContainer = styled.div`
@import url('https://use.fontawesome.com/releases/v5.0.13/css/all.css');
  font-family: sans-serif;
  font-size: 1.5rem;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  main {
    background-color: #383838;
    color: #fff;
    padding: 10px;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul li {
    background-color: #383838;
    padding: 10px 20px;
    position: relative;
    display: flex;
    align-items: flex-start;
    line-height: 1;
  }

  li .drag {
    margin-right: 15px;
    cursor: move;
  }

  li svg {
    height: 2rem;
    color: #fff;
  }



`