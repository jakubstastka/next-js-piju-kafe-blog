import Head from "next/head";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import MoreStories from "../../components/more-stories";
import Post from "../../interfaces/post";
import { getAllPosts } from "../../lib/api";
import { ARCHIVE_ARTICLES, BLOG_NAME } from "../../lib/constants";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Header />
          {allPosts.length > 0 && (
            <MoreStories categoryDetail={ARCHIVE_ARTICLES} posts={allPosts} />
          )}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "category",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "content",
  ]).slice(7);

  return {
    props: { allPosts },
  };
};
