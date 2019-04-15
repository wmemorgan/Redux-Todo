import styled from 'styled-components'
import theme from '../DesignComponents/theme'

export const TodoListContainer = styled.div`
    width: 90%;
    max-width: 600px;
    ${theme.flex('column','flex-start')};

    ul {
      width: 100%;
      padding: 0;
      list-style-type: none;
    }
`

export const TodoContainer = styled.div`
  width: 100%;
  ${theme.flex('row','center')};
  margin: 5px 0;
  padding: 10px;
  border: 1px solid ${theme.colorScheme.defaultBorderColor};
  border-radius: 5px;

  i {
    font-size: ${theme.fontSizing.sm};
  }

  i.completed {
    color: ${theme.color.success};
    font-weight: bold;
  }

  li {
    width: 100%;
    margin-left: 10px;
    font-size: ${theme.fontSizing.s};
    color: black;
    list-style: none;
    cursor: pointer;
  }

  li.completed {
    text-decoration: line-through;
  }

  form {
    width: 100%;
    margin-left: 10px;
  }

  input {
    width: 100%;
    padding: 5px;
    font-size: ${theme.fontSizing.s};
  }

  .drag {
    margin-right: 10px;
    cursor: pointer;
  }
`

export const DeleteContainer = styled.div`
  ${theme.flex('column','flex-end')};

  .fa-ellipsis-v, .fa-edit {
    margin: 5px;
  }

  .fa-ellipsis-v, .fa-trash, .fa-edit {
    cursor: pointer;
  }  
`

export const FormContainer = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 10px 0;

  form {
    width: 100%;
    ${theme.flex('row', 'center', 'space-between')};

    input {
      width: 90%;
      padding: 5px 10px;
      border: none;
      border-bottom: 1px solid ${theme.color.primaryDark};
      font-size: ${theme.fontSizing.s};
    }

    button {
      border: 1px solid transparent;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      font-size: ${theme.fontSizing.ml};
      font-weight: bold;
      background: ${theme.color.accent};
      color: ${theme.color.lightText};
    }
  }



`

export default TodoListContainer