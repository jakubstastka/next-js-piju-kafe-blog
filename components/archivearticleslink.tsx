import Link from "next/link";
import { MdArrowForward } from "react-icons/md";
import { ARCHIVE_ARTICLES } from "../lib/constants";

const ArchiveArticlesLink = () => {
  return (
    <div className="flex flex-row justify-end mb-10">
      <div>
        <Link
          as={`/archive/`}
          href="/archive/"
          className="text-xl md:text-3xl font-bold text-geraniumlake hover:underline"
        >
          <div className="flex flex-row items-end">
            {ARCHIVE_ARTICLES}
            <MdArrowForward
              className={"text-geraniumlake text-xl md:text-3xl"}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ArchiveArticlesLink;
