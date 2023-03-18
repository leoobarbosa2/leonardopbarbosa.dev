import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    body {
        background: ${({ theme }) => theme['gray-500']};
        color: ${({ theme }) => theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-size: 1rem;
    }
`