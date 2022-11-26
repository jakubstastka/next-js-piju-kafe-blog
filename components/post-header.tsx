import type Author from "../interfaces/author";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import PostTitle from "./post-title";
import Tag from "./tag";
import TagContainer from "./tag-container";

type Props = {
  title: string;
  tags: string[];
  coverImage: string;
  date: string;
  author: Author;
};

const PostHeader = ({ title, tags, coverImage, date, author }: Props) => {
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
        <TagContainer>
          {tags && tags.map((tag) => <Tag name={tag} />)}
        </TagContainer>
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
