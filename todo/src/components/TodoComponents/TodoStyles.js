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
  padding: 10px 5px;
  border: 1px solid ${theme.colorScheme.defaultBorderColor};
  border-bottom: none;

  &:last-child {
    border-bottom: 1px solid ${theme.colorScheme.defaultBorderColor};
  }


width: 100%;
  li {
    width: 100%;
    margin-left: 10px;
    font-size: ${theme.fontSizing.s};
    list-style: none;
    cursor: pointer;
  }

`

export default TodoListContainer