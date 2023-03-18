import * as prismicH from "@prismicio/helpers";
import { GetStaticPaths, GetStaticProps } from "next";
import { prismicClient } from "../../../prismicio";
import { Content } from "@prismicio/client";
import { Article, PostsContainer } from "../../styles/posts/styles";
import { useRouter } from "next/router";

interface PostProps {
  post: Content.BlogpostDocument
}

export default function Post({ post }: PostProps){

  const { isFallback } = useRouter();

  if(isFallback) {
    <p>Buscando novo post...</p>
  }

  //TO-DO: Show any UI informing that has no data to show
  if(!post) return null;

  return (
    <PostsContainer>
      {post.data.slices.map(slice => (
        <Article 
          key={slice.id} 
          dangerouslySetInnerHTML={{__html: prismicH.asHTML(slice.primary.content)}}
        />
      ))}
    </PostsContainer>
  )
};


export const getStaticPaths: GetStaticPaths = async () => {
  const client = prismicClient();
  const postsId = await client.getAllByType('blogpost')

  const paths = postsId.map(post => ({
      params: {
        postId: post.uid
      }
  }))

  return {
    fallback: true,
    paths: paths
  }
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  const { postId } = params as { postId: string};

  const client = prismicClient();
  const post = await client.getByUID('blogpost', postId);

  return {
    props: {
      post
    }
  }
}