import type Author from "../interfaces/author";
import Avatar from "./avatar";
import Category from "./category";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import GalleryCount from "./gallery-count";
import ImageSlider from "./image-slider";
import PostTitle from "./post-title";
import ReadingTime from "./readingtime";

type Props = {
  title: string;
  slug: string;
  category: string;
  coverImage: string;
  galleryImages?: string[];
  date: string;
  author: Author;
  readingTimeInput: number;
};

const PostHeader = ({
  title,
  slug,
  category,
  coverImage,
  galleryImages,
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
        {!galleryImages && (
          <CoverImage title={title} src={coverImage} slug={slug} />
        )}
        {galleryImages && <ImageSlider images={galleryImages} />}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end md:space-x-2 pb-2">
          <DateFormatter dateString={date} />
          <Category name={category} />
          <ReadingTime readingTimeInput={readingTimeInput} />
          {galleryImages && <GalleryCount imagesCount={galleryImages.length} />}
        </div>
        <div className="block md:hidden mb-6 mt-4">
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
