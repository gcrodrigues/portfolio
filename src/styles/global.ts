import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, border-style, #root {
    height: 100%;
  }

  #root {
    display: flex;
    justify-content: center;
  }
`