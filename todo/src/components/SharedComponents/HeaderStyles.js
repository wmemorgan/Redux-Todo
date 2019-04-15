import styled from 'styled-components'
import theme from '../DesignComponents/theme'

export const HeaderContainer = styled.header`
    width: 100%;
    max-width: 800px;
    ${theme.flex('column','center')};
    margin-bottom 10px;
    padding: 10px 5%;
    border-bottom: 30px solid ${theme.color.primaryBgShadingDark};
`

export const StatusContainer = styled.div`
    width: 100%;
    ${theme.flex('row', 'flex-start', 'space-between')};
    .status {
      font-size: ${theme.fontSizing.s};
      font-weight: bold;
      color: ${theme.color.danger};
    }
`

export const DateContainer = styled.div`
  ${theme.flex('column')};
  & * {
    margin-bottom: 10px;
  }

  .title {
    font-size: ${theme.fontSizing.ml};
    font-weight: bold;
    color: ${theme.color.primaryColor};

    @media ${theme.breakpoints[0]} {
      font-size: ${theme.fontSizing.m};
    }
  }

  .tagline {
    font-size: ${theme.fontSizing.sm};

    @media ${theme.breakpoints[0]} {
      font-size: ${theme.fontSizing.s};
    }
  }


`

export const QuoteContainer = styled.div`
  width: 80%;
  ${theme.flex('column','center')};
  margin-bottom: 10px;

  & * {
    margin-bottom: 5px;
  }

  .quote-text {
    font-size: ${theme.fontSizing.s};
    font-style: italic;
  }

  .quote-author {
    font-size: ${theme.fontSizing.xs};
  }

`

export default HeaderContainer

