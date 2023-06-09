import * as prismicH from '@prismicio/helpers'
import { GetStaticPaths, GetStaticProps } from 'next'
import { prismicClient } from '../../../prismicio'
import { Content } from '@prismicio/client'
import { Article, PostsContainer } from '../../styles/posts/styles'
import { useRouter } from 'next/router'
import { ArticleJsonLd, NextSeo } from 'next-seo'
import { DEFAULT_OG_IMAGE_URL } from '@/static/home'

interface PostProps {
  post: Content.BlogpostDocument
}

export default function Post({ post }: PostProps) {
  const { isFallback } = useRouter()
  const pageTitle = `${prismicH.asText(
    post?.data?.title
  )}| Leonardo Barbosa: Desenvolvedor frontend.`
  const pageDescription =
    post?.data?.description || 'Conteúdo de texto não encontrado'
  const ogImageUrl = post?.data?.ogImage?.url || DEFAULT_OG_IMAGE_URL

  //TO-DO Show loading component
  if (isFallback) {
    ;<p>Buscando novo post...</p>
  }

  if (!post) return null

  return (
    <>
      <NextSeo
        title={
          post ? pageTitle : 'Post | Leonardo Barbosa: Desenvolvedor frontend'
        }
        description={pageDescription}
        openGraph={{
          title: pageTitle,
          description: pageDescription,
          images: [
            {
              url: ogImageUrl,
            },
          ],
        }}
      />
      <PostsContainer>
        {post.data.slices.map((slice) => (
          <Article
            key={slice.id}
            dangerouslySetInnerHTML={{
              __html: prismicH.asHTML(slice.primary.content),
            }}
          />
        ))}
        <ArticleJsonLd
          url={`https://leonardopbarbosa/posts/${post.uid}`}
          title={pageTitle}
          datePublished={post.first_publication_date}
          dateModified={post.last_publication_date}
          description={pageDescription}
          authorName={[
            {
              name: 'Leonardo Barbosa',
              url: 'https://www.linkedin.com/in/leonardobarbosacp/',
            },
          ]}
          isAccessibleForFree={true}
          images={['https://github.com/leoobarbosa2.png']} //TODO
          publisherName={'Leonardo Barbosa'}
        />
      </PostsContainer>
    </>
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

  try {
    const post = await client.getByUID('blogpost', postId)
    return {
      props: {
        post,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}
