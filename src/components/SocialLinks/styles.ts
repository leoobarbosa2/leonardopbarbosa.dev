import { GithubLogo, LinkedinLogo } from 'phosphor-react'
import styled from 'styled-components'

export const SocialLinksContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 3em;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 5px 0px;

  @media (min-width: 1200px) {
    width: auto;
    position: fixed;
    left: 10px;
    top: 50%;
    padding: 50px 12px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    z-index: 100;
    border: none;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px;
  }
`

export const SocialinkList = styled.ul`
  height: inherit;
  display: flex;
  align-items: center;
  list-style: none;
  justify-content: center;
  gap: 0.5rem;
  @media (min-width: 1200px) {
    flex-direction: column;
  }
`

export const CustomGithubIcon = styled(GithubLogo)`
  color: ${({ theme }) => theme.colors.primary};
`

export const CustomLinkedInIcon = styled(LinkedinLogo)`
  color: ${({ theme }) => theme.colors.primary};
`
