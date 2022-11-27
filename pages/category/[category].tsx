import Head from "next/head";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import type PostType from "../../interfaces/post";
import { getAllCategories, getPostsByCategory } from "../../lib/api";
import { BLOG_NAME } from "../../lib/constants";

type Props = {
  posts: PostType[];
};

export default function PostsByCategory({ posts }: Props) {
  const morePosts = posts;
  const categoryName = morePosts.length > 0 ? morePosts[0].category : "";
  return (
    <Layout>
      <Head>
        <title>{BLOG_NAME}</title>
      </Head>

      <Container>
        <Header />
        {morePosts.length > 0 && (
          <MoreStories categoryDetail={categoryName} posts={morePosts} />
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    category: string;
  };
};

export async function getStaticProps({ params }: Params) {
  // get posts for each category
  const posts = getPostsByCategory(
    [
      "title",
      "category",
      "date",
      "slug",
      "author",
      "content",
      "ogImage",
      "coverImage",
    ],
    params.category
  );

  return {
    props: {
      posts,
    },
  };
}

export async function getStaticPaths() {
  // get all the paths for all the categories

  const categories = getAllCategories();
  return {
    paths: categories.map((category) => {
      return {
        params: {
          category: category["category"],
        },
      };
    }),
    fallback: false,
  };
}
