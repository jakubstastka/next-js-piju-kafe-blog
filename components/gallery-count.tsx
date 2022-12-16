import { MdImage } from "react-icons/md";
import { getPhotoWord } from "../lib/utils";

type Props = {
  imagesCount: number;
};

const galleryCount = ({ imagesCount }: Props) => {
  return (
    <div className="flex flex-row items-center text-md space-x-1">
      <MdImage className="text-satingold" />
      <div className="w-fit text-sm font-semibold text-floralwhite rounded-md">
        {`${imagesCount} ${getPhotoWord(imagesCount)}`}
      </div>
    </div>
  );
};

export default galleryCount;
