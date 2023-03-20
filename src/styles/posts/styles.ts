import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 3rem 0;
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Article = styled.article`
  h1 {
    text-align: justify;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.5rem;
    margin-bottom: 2.5rem;

    @media (max-width: 600px) {
      font-size: 2rem;
    }
  }

  p {
    line-height: 2;
    color: ${({ theme }) => theme.colors['text-dark']};
    margin-top: 1.25rem;
    text-align: justify;

    a {
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
    }

    @media (min-width: 600px) {
      font-size: 1.125rem;
    }
  }

  h2,
  h3 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    margin: 2rem 0;

    @media (max-width: 600px) {
      font-size: 1.25rem;
    }
  }

  ul {
    list-style: none;

    li {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.colors.secondary};
      font-weight: bold;
      margin-top: 1rem;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    object-fit: cover;
  }
`
