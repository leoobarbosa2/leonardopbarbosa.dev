import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    img {
        max-width: 100%;
    }

    body {
        background: ${({ theme }) => theme.colors["gray-light"]};
        color: ${({ theme }) => theme.colors["text-dark"]};
        -webkit-font-smoothing: antialiased;
    }
    
    body, input, textarea, button {
        font-size: 1rem;
    }
`