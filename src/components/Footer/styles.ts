import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    position: fixed;
    bottom: 0;
    height:  3rem;
    background-color: ${({ theme }) => theme.colors.primary};
`;

export const FooterLinkList = styled.ul`
    height: inherit;
    display: flex;
    align-items: center;
    list-style: none;
    justify-content: center;
    gap: 0.5rem;
`;