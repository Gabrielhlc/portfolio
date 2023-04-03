import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: ${({ theme }) => theme.background};
    }
    span, h1, h2, p, button {
        font-family: 'Poppins';
        font-weight: 600;
        color: ${({ theme }) => theme.white}
    }
`