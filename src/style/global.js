import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  *{
      padding:0;
      margin:0;
      box-sizing:border-box;
      font-family: 'Roboto', sans-serif;
      font-weight:400;
      text-rendering: optimizelegibility !important;
      -webkit-font-smoothing: antialiased !important
  }

  body,html,#root{
    height:100vh;
    width:100vw;
    background-color:#121214;
  }

  p{
      color:#807F84;
  }

`;
