import Head from "next/head";
import ArchiveArticlesLink from "../components/archivearticleslink";
import Container from "../components/container";
import FeaturedPosts from "../components/featured-posts";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import MoreStories from "../components/more-stories";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/api";
import { BLOG_NAME } from "../lib/constants";
import { readingTime } from "../lib/utils";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts
    .filter((post) => post.featured !== true)
    .slice(1, 7);

  const featuredPosts = allPosts.filter((post) => post.featured === true);

  // for now we can have only two featured articles
  if (featuredPosts.length > 2) {
    throw new Error("Too many featured articles!");
  }

  return (
    <>
      <Layout>
        <Head>
          <title>{BLOG_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              galleryImages={heroPost.galleryImages}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
              category={heroPost.category}
              readingTimeInput={readingTime(heroPost.content)}
            />
          )}
          {featuredPosts.length > 0 && <FeaturedPosts posts={featuredPosts} />}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          <ArchiveArticlesLink />
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
    "galleryImages",
    "excerpt",
    "content",
    "featured",
  ]);

  return {
    props: { allPosts },
  };
};
