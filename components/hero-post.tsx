import Link from "next/link";
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

const HeroPost = ({
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
    <section>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-raspberry text-4xl font-bold lg:text-5xl leading-tight">
            <Link
              as={`/posts/${slug}`}
              href="/posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="flex flex-row items-center space-x-2">
            {category && <Category name={category} />}
            <div className="text-lightgray bg-umber py-0.5 px-1 rounded-md md:mb-0 text-sm font-semibold">
              Čtení na {readingTimeInput}{" "}
              {getReadingTimeEstimateUnit(readingTimeInput)}
            </div>
          </div>
          <div className="mt-2 mb-4 text-coffee md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg text-coffee leading-relaxed mb-4">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
