import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: linear-gradient(#1A1A14,#0F0F0F);
    font-family: 'Roboto', sans-serif;
  }

  #root{
    min-height: 100vh;
    position: relative; 
  }

  .App{
    padding-bottom: 150px;
  }

`
