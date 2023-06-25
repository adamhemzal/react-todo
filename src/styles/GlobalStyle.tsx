import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    max-width: 1280px;
    font-family: monospace;
    font-size: 1rem;
  }
`;
