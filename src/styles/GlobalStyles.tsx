import { createGlobalStyle } from 'styled-components';
import { fonts } from './Fonts';

export const GlobalStyles = createGlobalStyle`
${fonts}
* {
  font-family: 'Pretendard', sans-serif;
  
}
  p {
    margin: 0;
  }
  body{
    margin: 0;
    padding: 0;
    }
  #root {
    max-width:375px;
    margin: 0 auto;
    padding: 0;
  } 
`;
