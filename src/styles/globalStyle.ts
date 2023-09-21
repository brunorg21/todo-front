import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: "Roboto", sans-serif;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    background-color: ${(props) => props.theme["gray-900"]};    
  }
 

  button {
    border: none;
  }
`;
