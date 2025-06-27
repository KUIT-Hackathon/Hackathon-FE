import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  p {
    margin: 0;
  }
  body{
    margin: 0;
    padding: 0;
    }
  #root {
    // to-do: 디자인 나오면 바꾸기
    max-width:800px;
    margin: 0 auto;
    padding: 0;
  } 
`;
