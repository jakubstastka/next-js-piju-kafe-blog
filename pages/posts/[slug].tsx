import ErrorPage from "next/error";
import Head from "next/head";
import { useRouter } from "next/router";
import CoffeeInfoBox from "../../components/coffeeinfobox";
import Container from "../../components/container";
import Header from "../../components/header";
import Layout from "../../components/layout";
import PostBody from "../../components/post-body";
import PostHeader from "../../components/post-header";
import PostTitle from "../../components/post-title";
import type PostType from "../../interfaces/post";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { BLOG_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { readingTime } from "../../lib/utils";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{`${post.title} | ${BLOG_NAME}`}</title>
                <meta property="og:image" content={post.ogImage.url} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
                category={post.category}
                readingTimeInput={readingTime(post.content)}
              />
              <PostBody content={post.content} />
              {post.isReview && (
                <CoffeeInfoBox
                  name={post.review.name}
                  roastery={post.review.roastery}
                  country={post.review.country}
                  roastedDegree={post.review.roastedDegree}
                  processingMethod={post.review.processingMethod}
                  preparedMethod={post.review.preparedMethod}
                />
              )}
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "category",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "isReview",
    "review",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
