import Link from "next/link";

type Props = {
  name: string;
};

const Category = ({ name }: Props) => {
  return (
    <div className="w-min text-sm py-0.5 px-1 font-semibold bg-coffee hover:bg-raspberry rounded-md text-lightgray">
      <Link
        as={`/category/${name}`}
        href="/category/[category]"
        aria-label={name}
      >
        {name}
      </Link>
    </div>
  );
};

export default Category;
