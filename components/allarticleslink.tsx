import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
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
          <div className="flex flex-row items-end">
            {ALL_ARTICLES}
            <MdArrowForward className={"text-raspberry text-xl md:text-3xl"} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AllArticlesLink;
