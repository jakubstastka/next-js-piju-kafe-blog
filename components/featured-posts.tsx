import type Post from "../interfaces/post";
import { FEATURED_POSTS } from "../lib/constants";
import { readingTime } from "../lib/utils";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
};

const FeaturedPosts = ({ posts }: Props) => {
  return (
    <section className="border-2 rounded-xl border-dashed border-satingold pt-6 pl-7 pr-6 mb-12">
      <h2 className="mb-8 text-satingold text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        {FEATURED_POSTS}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            category={post.category}
            coverImage={post.coverImage}
            galleryImages={post.galleryImages}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
            readingTimeInput={readingTime(post.content)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedPosts;
