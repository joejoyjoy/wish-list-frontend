import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #fff;
}

html {
  background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(40,40,40,1) 100%);
  background-size: cover;
  background-repeat:no-repeat;
  min-height: 100%;
}

body {
  -moz-user-select:none; /* firefox */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE */
  user-select: none; /* Standard syntax */
  
  scrollbar-color: #676767 #424242;
  
  &::-webkit-scrollbar {
    width: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #424242;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #676767;
    border-radius: 6px;
    border: 3px solid #424242;
  }
}
`