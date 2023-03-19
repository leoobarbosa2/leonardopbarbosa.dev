import Link from 'next/link'
import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 0 1.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.white};
`

export const MenuContainer = styled.div`
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1080px;
  margin: 0 auto;
`

export const Menu = styled.ul`
  display: flex;
  gap: 1.5rem;

  li {
    list-style: none;
  }
`
interface CustomLinkProps {
  isLinkActive: boolean
}

export const CustomLink = styled(Link)<CustomLinkProps>`
  text-decoration: none;
  font-size: 1.5rem;
  ${({ theme, isLinkActive = false }) => {
    if (isLinkActive) {
      return css`
        color: ${theme.colors.secondary};
      `
    } else {
      return css`
        color: ${theme.colors['gray-light']};
      `
    }
  }};
`
