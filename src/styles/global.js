import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    width: 100%;
  }
  html, body, #root {
    display: flex;
    height: 100%;
    width: 100%;
  }
  body {
    font: 14px 'Roboto', sans-serif;
    background: white;
    color: #333;
    -webkit-font-smoothing: antialiased !important;
  }
  ul {
    list-style: none;
  }
`;