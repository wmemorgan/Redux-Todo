import styled from 'styled-components'
import { flex } from './theme'

const AppContainer = styled.div`
  width: 90%;
  max-width: 800px;
  ${flex('column','center','center')};
  margin: 20px auto;
  padding: 20px 0;
  border: 1px solid black;

`

export default AppContainer