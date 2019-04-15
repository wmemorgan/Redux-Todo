import styled from 'styled-components'
import theme from './theme'

export const AppContainer = styled.div`
  width: 90%;
  max-width: 800px;
  ${theme.flex('column','center','center')};
  margin: 20px auto;
  padding-top: 60px;
  padding-bottom: 60px;
  border: 1px solid ${theme.colorScheme.defaultBorderColor};
  box-shadow: inset -1px -3px 4px 3px rgba(0,0,0,0.15);
  border-radius: 36px;

  @media ${theme.breakpoints[0]} {
    width: 100%;
    margin: 0;
    padding-top: 0;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }
`

export const AppWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  ${theme.flex('column','center','center')};
  margin: 20px auto;
  padding: 10px 0;
  border: 1px solid ${theme.colorScheme.defaultBorderColor};
  border-radius: 10px;

  @media ${theme.breakpoints[0]} {
    width: 100%;
    margin: 0;
    padding: 0;
    padding-top: 20px;
    border: none;
    box-shadow: none;
    border-radius: 0;
  }
`

export default AppContainer