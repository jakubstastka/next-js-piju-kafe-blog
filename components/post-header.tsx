import type Author from "../interfaces/author";
import { getReadingTimeEstimateUnit } from "../lib/utils";
import Avatar from "./avatar";
import Category from "./category";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";

type Props = {
  title: string;
  category: string;
  coverImage: string;
  date: string;
  author: Author;
  readingTimeInput: number;
};

const PostHeader = ({
  title,
  category,
  coverImage,
  date,
  author,
  readingTimeInput,
}: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12 md:mt-3">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 mt-2 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-row items-center space-x-2">
          {category && <Category name={category} />}
          <div className="text-lightgray bg-coffee py-0.5 px-1 rounded-md md:mb-0 text-sm font-semibold">
            Čtení na {readingTimeInput}{" "}
            {getReadingTimeEstimateUnit(readingTimeInput)}
          </div>
        </div>
        <div className="block md:hidden mb-6 mt-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>

        <div className="mb-6 text-lg italic text-coffee">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
