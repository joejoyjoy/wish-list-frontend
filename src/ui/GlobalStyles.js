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
`