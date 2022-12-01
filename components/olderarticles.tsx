import Link from "next/link";
import { OLDER_ARTICLES } from "../lib/constants";

const OlderArticles = () => {
  return (
    <div className="flex flex-row justify-end mb-10">
      <div>
        <Link
          as={`/everything/`}
          href="/everything/"
          className="text-xl md:text-3xl font-bold text-raspberry hover:underline"
        >
          {OLDER_ARTICLES}
        </Link>
      </div>
    </div>
  );
};

export default OlderArticles;
