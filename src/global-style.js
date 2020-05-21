import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: linear-gradient(#292828 , #282323);
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