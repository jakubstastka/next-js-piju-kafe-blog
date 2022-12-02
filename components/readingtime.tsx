import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { getReadingTimeEstimateUnit } from "../lib/utils";

type Props = {
  readingTimeInput: number;
};

const ReadingTime = ({ readingTimeInput }: Props) => {
  return (
    <>
      <MdOutlineAccessTimeFilled className="text-umber" />
      <div className="text-umber text-sm font-semibold">
        Čtení na {readingTimeInput}{" "}
        {getReadingTimeEstimateUnit(readingTimeInput)}
      </div>
    </>
  );
};

export default ReadingTime;
