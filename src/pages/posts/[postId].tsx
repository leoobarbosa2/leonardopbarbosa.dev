import * as prismicH from '@prismicio/helpers'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prismicClient } from '../../../prismicio'
import { Content } from '@prismicio/client'
import { Article, PostsContainer } from '../../styles/posts/styles'
import { useRouter } from 'next/router'
import { SEOContainer } from '@/templates/seo'

interface PostProps {
  post: Content.BlogpostDocument
}

export default function Post({ post }: PostProps) {
  const pageTitle = `${prismicH.asText(
    post?.data?.title
  )}| Leonardo Barbosa: Desenvolvedor frontend.`
  const pageDescription =
    post?.data?.description || 'Conteúdo de texto não encontrado'
  const { isFallback } = useRouter()

  //TO-DO Show loading component
  if (isFallback) {
    ;<p>Buscando novo post...</p>
  }

  //TO-DO: Show any UI informing that has no data to show
  if (!post) return null

  return (
    <SEOContainer
      title={
        post ? pageTitle : 'Post | Leonardo Barbosa: Desenvolvedor frontend'
      }
      description={pageDescription}
    >
      <PostsContainer>
        {post.data.slices.map((slice) => (
          <Article
            key={slice.id}
            dangerouslySetInnerHTML={{
              __html: prismicH.asHTML(slice.primary.content),
            }}
          />
        ))}
      </PostsContainer>
    </SEOContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const client = prismicClient()
  const postsId = await client.getAllByType('blogpost')

  const paths = postsId.map((post) => ({
    params: {
      postId: post.uid,
    },
  }))

  return {
    fallback: true,
    paths: paths,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { postId } = params as { postId: string }

  const client = prismicClient()
  const post = await client.getByUID('blogpost', postId)

  //TO-DO: Handle post not found

  return {
    props: {
      post,
    },
  }
}
