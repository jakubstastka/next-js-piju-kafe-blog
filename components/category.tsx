import Link from "next/link";
import { MdLocalOffer } from "react-icons/md";

type Props = {
  name: string;
};

const Category = ({ name }: Props) => {
  return (
    <div className="flex flex-row items-center text-md text-satingold hover:text-geraniumlake space-x-1">
      <MdLocalOffer />
      <div className="w-min text-sm font-semibold hover:text-geraniumlake rounded-md">
        <Link
          as={`/category/${name}`}
          href="/category/[category]"
          aria-label={name}
        >
          {name}
        </Link>
      </div>
    </div>
  );
};

export default Category;
