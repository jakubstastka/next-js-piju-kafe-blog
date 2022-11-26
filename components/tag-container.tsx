type Props = {
  children: React.ReactNode;
};

const TagContainer = ({ children }: Props) => {
  return <span className="space-x-1">{children}</span>;
};

export default TagContainer;
