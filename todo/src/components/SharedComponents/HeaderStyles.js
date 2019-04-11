import styled from 'styled-components'
import theme from '../DesignComponents/theme'

export const HeaderContainer = styled.header`
    width: 90%;
    max-width: 600px;
    ${theme.flex('column','center')};
    margin: 10px 0;
    border-bottom: 1px solid ${theme.colorScheme.defaultBorderColor};
`

export const StatusContainer = styled.div`
    width: 100%;
    ${theme.flex('row', 'flex-start', 'space-between')};
    .status {
      font-size: ${theme.fontSizing.s};
    }
`

export const DateContainer = styled.div`
  ${theme.flex('column')};
  & * {
    margin-bottom: 10px;
  }

  .title {
    font-size: ${theme.fontSizing.ml};
    color: ${theme.color.primaryColor};
  }

  .tagline {
    font-size: ${theme.fontSizing.sm};
  }
`

export const QuoteContainer = styled.div`
  width: 40%;
  ${theme.flex('column','center')};
  margin-bottom: 10px;

  & * {
    margin-bottom: 5px;
  }

  .quote-text {
    font-size: ${theme.fontSizing.s};
    font-style: italic;
  }

`

export default HeaderContainer

