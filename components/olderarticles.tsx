import Link from "next/link";
import { ALL_ARTICLES } from "../lib/constants";

const AllArticlesLink = () => {
  return (
    <div className="flex flex-row justify-end mb-10">
      <div>
        <Link
          as={`/everything/`}
          href="/everything/"
          className="text-xl md:text-3xl font-bold text-raspberry hover:underline"
        >
          {ALL_ARTICLES}
        </Link>
      </div>
    </div>
  );
};

export default AllArticlesLink;
