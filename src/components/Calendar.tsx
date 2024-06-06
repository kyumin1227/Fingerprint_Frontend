import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { useState } from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { setKeyDate, setKeyInfo } from "../store/KeyInfo";
import { getKeyInfo } from "../api/key";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const dispatch = useDispatch();

  const handleDateChange = async (newDate: any) => {
    setSelectedDate(newDate);
    const date =
      newDate.get("year") +
      "-" +
      String(newDate.get("month") + 1).padStart(2, "0") +
      "-" +
      String(newDate.get("date")).padStart(2, "0");
    dispatch(setKeyDate(date));
    const res = await getKeyInfo(date);
    dispatch(setKeyInfo(res.data));
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
