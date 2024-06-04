import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const handleDateChange = (newDate: any) => {
    setSelectedDate(newDate);
    console.log(newDate);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar value={selectedDate} onChange={handleDateChange} />
      </LocalizationProvider>
    </>
  );
};

export default Calendar;
