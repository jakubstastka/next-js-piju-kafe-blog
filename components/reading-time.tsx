import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { getReadingTimeEstimateUnit } from "../lib/utils";

type Props = {
  readingTimeInput: number;
};

const ReadingTime = ({ readingTimeInput }: Props) => {
  return (
    <div className="flex flex-row items-center text-md text-floralwhite hover:text-satingold space-x-1">
      <MdOutlineAccessTimeFilled className="text-satingold" />
      <div className="text-floralwhite text-sm font-semibold">
        Čtení na {readingTimeInput}{" "}
        {getReadingTimeEstimateUnit(readingTimeInput)}
      </div>
    </div>
  );
};

export default ReadingTime;
