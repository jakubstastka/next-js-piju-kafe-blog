import Link from "next/link";
import type Author from "../interfaces/author";
import { I_WANNA_KNOW_MORE } from "../lib/constants";
import Avatar from "./avatar";
import Category from "./category";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import GalleryCount from "./gallery-count";
import ReadingTime from "./readingtime";

type Props = {
  title: string;
  category: string;
  coverImage: string;
  galleryImages: string[];
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
  galleryImages,
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
      <h3 className="text-3xl text-geraniumlake font-bold mb-3 leading-snug">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="hover:underline"
        >
          {title}
        </Link>
      </h3>
      <div className="flex flex-col md:flex-row items-start md:items-end space-y-1 md:space-x-2 pb-2">
        <DateFormatter dateString={date} />
        <Category name={category} />
        <ReadingTime readingTimeInput={readingTimeInput} />
        {galleryImages && <GalleryCount imagesCount={galleryImages.length} />}ˇ
      </div>
      <p className="text-lg text-floralwhite leading-relaxed mb-4">
        {excerpt}{" "}
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
          className="text-geraniumlake hover:underline"
        >
          {I_WANNA_KNOW_MORE}
        </Link>
      </p>
      <Avatar name={author.name} picture={author.picture} />
    </div>
  );
};

export default PostPreview;
