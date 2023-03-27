import { Card } from '@/components/Card'
import { Content } from '@prismicio/client'
import * as prismicH from '@prismicio/helpers'
import { GetStaticProps } from 'next'
import { FileX } from 'phosphor-react'
import { prismicClient } from '../../../prismicio'

import { NotFoundContainer, PostsContainer } from '../../styles/posts/styles'
import { NextSeo } from 'next-seo'
import { POSTS_SEO_BASE_DATA } from '@/static/home'

type Post = {
  title: string
  description: string
  publishedDate: string
  uuid: string
}

interface PostProps {
  posts: Post[]
}

export default function Posts({ posts }: PostProps) {
  const hasPosts = posts.length > 0
  const sortedPost = posts
    .sort(
      (a, b) =>
        new Date(a.publishedDate).valueOf() -
        new Date(b.publishedDate).valueOf()
    )
    .reverse()
  if (!hasPosts) {
    return (
      <NotFoundContainer>
        <FileX size={100} />
        <h1>Nenhum conteúdo encontrado</h1>
        <p>Não conseguimos retornar ou não existe nenhum post no momento</p>
      </NotFoundContainer>
    )
  }

  return (
    <>
      <NextSeo {...POSTS_SEO_BASE_DATA} />
      <PostsContainer>
        {sortedPost.map((post) => (
          <Card
            key={post.uuid}
            title={post.title}
            description={post.description}
            publishedDate={post.publishedDate}
            linkTo={`/posts/${post.uuid}`}
          />
        ))}
      </PostsContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = prismicClient()
  const response: Content.BlogpostDocument[] = await client.getAllByType(
    'blogpost'
  )

  const posts = response.map((post) => {
    return {
      title: prismicH.asText(post.data.title),
      description: post.data.description,
      publishedDate: post.data.publishedDate,
      uuid: post.uid,
    }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12, // 12 hours
  }
}
