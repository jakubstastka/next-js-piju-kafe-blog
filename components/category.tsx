type Props = {
  name: string;
};

const Category = ({ name }: Props) => {
  return (
    <div className="w-min text-sm py-0.5 px-1 font-semibold bg-coffee rounded-md text-lightgray">
      {name}
    </div>
  );
};

export default Category;
