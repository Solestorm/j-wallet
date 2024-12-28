import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
  }

  .app {
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    background: white;
    position: relative;
  }
`; 