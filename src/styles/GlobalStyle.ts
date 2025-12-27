import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    background-color: #fafafa;
    color: #111;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
