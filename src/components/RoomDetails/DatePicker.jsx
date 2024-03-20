import { DateRange } from "react-date-range";

const DatePicker = () => {
  return (
    <DateRange
      rangeColors={["#F43F5E"]}
      direction="vertical"
      showDateDisplay={false}
    />
  );
};

export default DatePicker;
