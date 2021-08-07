import { createGlobalStyle } from 'styled-components';
import { Variables } from '../variables';

const { gray100 } = Variables.Color;

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: ${gray100};
  }
  body,
  input,
  textarea,
  button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 400;
  }
  button{
    cursor: pointer;
  }
  [disabled]{
    cursor: not-allowed;
    opacity: 0.6;
  }
  html{
    @media(max-width:720px){
      font-size:87.5%
    }
    @media(max-width:1080px){
      font-size:93.75%
    }
  }
`;
