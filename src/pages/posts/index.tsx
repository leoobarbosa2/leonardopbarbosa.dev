import Link from 'next/link'
import * as prismicH from "@prismicio/helpers";
import { GetServerSideProps } from "next";
import { prismicClient, } from "../../../prismicio";
import { Content } from '@prismicio/client'

interface PostsPageProps {
  posts: Content.BlogpostDocument[]
}

export default function Posts({ posts }: PostsPageProps) {

  return (
    <div>
      {posts.map(post => (
        <div key={post.uid}>
          <Link href={`/posts/${post.uid}`}>
            {prismicH.asText(post.data.title)}
          </Link>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const client = prismicClient();
  const posts: Content.BlogpostDocument[]  = await client.getAllByType("blogpost");

  return {
    props: {
      posts,
    },
  };
};
