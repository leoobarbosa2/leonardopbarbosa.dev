import { GetStaticProps } from "next";
import { prismicClient } from "../../../prismicio";

export default function PostsPage({ page }: any) {
  return (
    <div>
      {page.map((item: any) => (
        <>
          <h1>{item.data.uuid}</h1>
          <h2>{item.data.title}</h2>
          <p>{item.data.paragraph}</p>
        </>
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = prismicClient();
  const page = await client.getAllByType("blogpost");

  return {
    props: {
      page,
    },
  };
};
