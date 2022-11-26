type Props = {
  tag: string;
};

const Tag = ({ tag }: Props) => {
  return (
    <span className="text-sm py-0.5 px-1 font-semibold bg-coffee rounded-md text-lightgray">
      {tag}
    </span>
  );
};

export default Tag;
