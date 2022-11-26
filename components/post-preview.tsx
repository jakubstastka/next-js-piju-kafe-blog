import Link from "next/link";
import slugify from "slugify";
import type Author from "../interfaces/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import Tag from "./tag";
import TagContainer from "./tag-container";

type Props = {
  title: string;
  tags: string[];
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const PostPreview = ({
  title,
  tags,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  return (
    <div>
      <div className="mb-5">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>
      <h3 className="text-3xl text-raspberry font-bold mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <TagContainer>
        {tags && tags.map((tag) => <Tag key={slugify(tag)} tag={tag} />)}
      </TagContainer>
      <div className="mt-2 text-lg text-coffee mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg text-coffee leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
