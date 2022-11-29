import Link from "next/link";
import slugify from "slugify";
import type Author from "../interfaces/author";
import { getReadingTimeEstimateUnit } from "../lib/utils";
import Avatar from "./avatar";
import Category from "./category";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

type Props = {
  title: string;
  category: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  readingTimeInput: number;
};

const PostPreview = ({
  title,
  category,
  coverImage,
  date,
  excerpt,
  author,
  slug,
  readingTimeInput,
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
      <div className="flex flex-row items-center space-x-2">
        {category && <Category key={slugify(category)} name={category} />}
        <div className="text-lightgray bg-umber py-0.5 px-1 rounded-md md:mb-0 text-sm font-semibold">
          Čtení na {readingTimeInput}{" "}
          {getReadingTimeEstimateUnit(readingTimeInput)}
        </div>
      </div>
      <div className="mt-2 text-lg text-coffee mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg text-coffee leading-relaxed mb-4">{excerpt}</p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
