import type Author from "../interfaces/author";
import Avatar from "./avatar";
import Category from "./category";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import ReadingTime from "./readingtime";

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
        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-2 pb-2">
          <DateFormatter dateString={date} />
          <Category name={category} />
          <ReadingTime readingTimeInput={readingTimeInput} />
        </div>
        <div className="block md:hidden mb-6 mt-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
