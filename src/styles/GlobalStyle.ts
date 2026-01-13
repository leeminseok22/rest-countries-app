import { createGlobalStyle } from "styled-components";
import type { Theme } from "./theme";
const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Helvetica Neue', Arial, sans-serif;

    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};

    transition: background-color 0.2s ease, color 0.2s ease;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export { GlobalStyle };
