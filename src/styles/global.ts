import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: 'Kumbh Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    font-size: 62.5%;
  }

  html, border-style, #root {
    height: 100%;
  }

  body {
    background-color: ${({ theme }) => theme.colors.colorPrimaryBackground};
    color: ${({ theme }) => theme.colors.colorText};
  }
  
  button {
    color: ${({ theme }) => theme.colors.colorText};
    cursor: pointer;
    border: none;
  }

`
