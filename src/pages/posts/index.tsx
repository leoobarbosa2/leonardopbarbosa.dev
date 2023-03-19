import * as prismicH from "@prismicio/helpers";
import {GetStaticProps } from "next";
import { prismicClient, } from "../../../prismicio";
import { Content } from '@prismicio/client'
import { Card } from '@/components/Card';
import { FileX  } from 'phosphor-react'

import { NotFoundContainer, PostsContainer } from "../../styles/posts/styles";
import { SEOContainer } from "@/templates/seo";

type Post = {
  title: string;
  description: string;
  publishedDate: string;
  uuid: string;
}

interface PostProps {
  posts: Post[]
}

export default function Posts({ posts }: PostProps) {
  const hasPosts = posts.length > 0;

  if(!hasPosts) {
    return (
      <NotFoundContainer>
        <FileX size={100} />
        <h1>Nenhum conteúdo encontrado</h1>
        <p>Não conseguimos retornar ou não existe nenhum post no momento</p>
      </NotFoundContainer>
    )
  }

  return (
    <SEOContainer
      title="Posts | Leonardo Barbosa: Desenvolvedor front end"
      description="Alguns posts sobre tecnologias, desenvolvimento web e experiencias na área de desenvolvimento que envolvem front-end"
    >
      <PostsContainer>
        {posts.map(post => (
            <Card 
              key={post.uuid}
              title={post.title}
              description={post.description}
              publishedDate={post.publishedDate}
              linkTo={`/posts/${post.uuid}`}
            />
        ))}
      </PostsContainer>
    </SEOContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const client = prismicClient();
  const response: Content.BlogpostDocument[]  = await client.getAllByType("blogpost");

  const posts = response.map(post => {
    return {
      title: prismicH.asText(post.data.title),
      description: post.data.description,
      publishedDate: post.data.publishedDate,
      uuid: post.uid
    }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 60 * 12 // 12 hours
  };
};
