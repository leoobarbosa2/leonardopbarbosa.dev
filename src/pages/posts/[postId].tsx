import * as prismicH from "@prismicio/helpers";
import { GetStaticPaths, GetStaticProps } from "next";
import { prismicClient } from "../../../prismicio";
import { Content } from "@prismicio/client";

interface PostProps {
  post: Content.BlogpostDocument
}

const Post = ({ post }: PostProps) => {
  console.log(post)
  return (
    <div>
      {post.data.slices.map(slice => (
        <article 
          key={slice.id} 
          dangerouslySetInnerHTML={{__html: prismicH.asHTML(slice.primary.content)}}
        />
      ))}
      post
    </div>
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
    fallback: false,
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
 
export default Post;

