import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Article = styled.article`
  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  p {
    line-height: 1.6;
    color: ${({ theme }) => theme.colors['text-dark']};
    margin-top: 1.25rem;

    a {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
    }
  }

  h2,
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;

    @media (max-width: 600px) {
      font-size: 1.25rem;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
`
