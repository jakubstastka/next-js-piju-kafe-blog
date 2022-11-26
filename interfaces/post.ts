import type Author from "./author";
import type Coffee from "./coffee";

type PostType = {
  slug: string;
  tags: string[];
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  isReview: boolean;
  review: Coffee;
};

export default PostType;
