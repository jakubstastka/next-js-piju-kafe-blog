import { format, parseISO } from "date-fns";
import { cs } from "date-fns/locale";
import { MdCreate } from "react-icons/md";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <div className="flex flex-row space-x-1 items-center">
      <MdCreate className="text-umber" />
      <div className="text-umber font-semibold text-sm">
        <time dateTime={dateString}>
          {format(date, "dd. LLLL yyyy", { locale: cs })}
        </time>
      </div>
    </div>
  );
};

export default DateFormatter;
