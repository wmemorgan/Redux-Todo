import styled from 'styled-components'
import theme from './theme'

const AppContainer = styled.div`
  width: 90%;
  max-width: 800px;
  ${theme.flex('column','center','center')};
  margin: 20px auto;
  padding: 10px 0;
  border: 3px solid ${theme.colorScheme.primaryColor};
  border-radius: 36px;
`

export default AppContainer