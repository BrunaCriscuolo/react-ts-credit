import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-color: #f8f2f5;
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
`;
