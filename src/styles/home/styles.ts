import Link from "next/link";
import styled from "styled-components";

export const IndexContainer = styled.div`
    img {
        display: block;
        margin: 0 auto;
        border-radius: 50%;
        outline: 4px solid ${({ theme } ) => theme.colors.secondary};

        @media(max-width: 600px) {
            width: 200px;
            height: 200px;  
        }
    }
`;

export const GreetingsMessage = styled.span`
    display: block;
    margin-top: 1.25rem;
    font-size: 5rem;

    @media(max-width: 600px) {
        font-size: 2rem;
    }

    span {
        margin-left: 0.5rem;
        color: ${({ theme } ) => theme.colors.secondary}
    }
`

export const RoleContainer = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: flex-end;
`;

export const Role = styled.span`
    font-size: 2rem;

    @media(max-width: 600px) {
        font-size: 1.5rem;
    }
`;

export const DateText = styled.span`
    margin-left: 0.5rem;
    font-size: 1.5rem;
    color: ${({ theme } ) => theme.colors.secondary};

    @media(max-width: 600px) {
        font-size: 1rem;
    }
`

export const Description = styled.p`
    margin-top: 1.25rem;
    line-height: 1.6;
    text-align: justify;
    color: ${({ theme } ) => theme.colors["text-dark"]};
`

export const ReadArticlesButton = styled(Link)`
   display: block;
   margin-top: 1.25rem;
   font-size: 1.25rem;
   text-decoration: underline;
   color: ${({ theme } ) => theme.colors.secondary};
   text-align: center;
`;