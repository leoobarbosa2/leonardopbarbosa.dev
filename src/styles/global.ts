import { createGlobalStyle } from 'styled-components'

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
        background: ${({ theme }) => theme.colors['soft-white']};
        color: ${({ theme }) => theme.colors['text-dark']};
        -webkit-font-smoothing: antialiased;
    }

    p {
        font-family: var(--roboto-mono);

        &::selection {
          color: ${({ theme }) => theme.colors.white};
          background: ${({ theme }) => theme.colors.secondary};
        }
    }
`
