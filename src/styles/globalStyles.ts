import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.defaultFont};
    transition-duration: .6s;
  }
  a, h1, h2, h3, p, strong, span {
    color: ${({ theme }) => theme.colors.defaultFont};
  }
  body {
    font-family: 'Roboto', sans-serif;  
    background-color: ${({ theme }) => theme.colors.background};
  }
  input, button, textarea, select {
    font-family: 'Roboto', sans-serif;
  }
  input:focus, textarea:focus, select:focus{
    outline: none;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      filter: opacity(0.8)
    }
  }
  .ok-text{
    color: ${({ theme }) => theme.colors.success};
    font-size: 0.75rem;
  }
  .primary-color{
    color: ${({ theme }) => theme.colors.primary};
  }
  .font-bold{
    font-weight: 700;
  }
  .h2{
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 28px;
    color: ${({ theme }) => theme.colors.defaultFont};
  }
  .wallet{
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem; //40px
    line-height: 47px;
  }
`

export default GlobalStyle