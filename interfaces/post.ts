import type Author from "./author";
import type Coffee from "./coffee";

type PostType = {
  slug: string;
  category: string;
  title: string;
  date: string;
  coverImage: string;
  galleryImages?: string[];
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  isReview: boolean;
  review: Coffee;
  featured?: boolean;
};

export default PostType;
