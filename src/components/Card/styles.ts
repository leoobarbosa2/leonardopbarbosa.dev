import styled from 'styled-components'
import Link from 'next/link'

export const LinkContainer = styled(Link)`
  display: block;
  text-decoration: none;

  &:hover {
    h2 {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  & + & {
    margin-top: 1.25rem;
  }

  &:last-child > div {
    border: none;
  }
`

export const CardContainer = styled.div`
  min-height: 160px;
  padding: 1.25rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};

  &:last-child {
  }
`

export const CardPublishedDate = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`

export const CardTitle = styled.h2`
  transition: color 0.4s;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary};
`

export const CardDescription = styled.p`
  margin: 0.5rem 0;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors['text-dark']};
`
