import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.bg};
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: ${({ theme }) => theme.fontSizes.base};
    line-height: 1.55;
  }
  h1, h2, h3, h4, h5, h6, p { margin: 0; }
  ::selection { background: ${({ theme }) => theme.colors.primarySoft}; }
`

export const VentyraGlobalStyles = GlobalStyles
