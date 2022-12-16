import type Post from "../interfaces/post";
import { KNOW_MORE } from "../lib/constants";
import { readingTime } from "../lib/utils";
import PostPreview from "./post-preview";

type Props = {
  posts: Post[];
  categoryDetail?: string;
};

const MoreStories = ({ posts, categoryDetail }: Props) => {
  return (
    <section>
      {!categoryDetail && (
        <h2 className="mb-8 text-satingold text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          {KNOW_MORE}
        </h2>
      )}
      {categoryDetail && (
        <h2 className="mb-8 text-geraniumlake text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          {categoryDetail}
        </h2>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
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

export default MoreStories;
