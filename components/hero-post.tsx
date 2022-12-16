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

const HeroPost = ({
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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-geraniumlake text-4xl font-bold lg:text-5xl leading-tight">
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
            {galleryImages && (
              <GalleryCount imagesCount={galleryImages.length} />
            )}
          </div>
        </div>
        <div>
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
      </div>
    </section>
  );
};

export default HeroPost;
