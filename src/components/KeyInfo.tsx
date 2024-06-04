import { Grid } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { getKeyInfo } from "../api/key";
import { useSelector } from "react-redux";
import { stateType } from "../store";

// TODO 키 정보 가져와서 세팅 필요
const KeyInfo = () => {
  const { date } = useSelector((state: stateType) => state.key);

  const [startTime, setStartTime] = useState(dayjs().hour(13).minute(10));
  const [endTime, setEndTime] = useState(dayjs().hour(13).minute(10));

  useEffect(() => {
    const handleKeyInfo = async () => {
      const res = await getKeyInfo(date);
      setStartTime(
        dayjs()
          .hour(Number(res.data.startTime.slice(0, 2)))
          .minute(Number(res.data.startTime.slice(3, 5)))
      );
    };
    handleKeyInfo();
  });

  return (
    <>
      <Grid sx={{ backgroundColor: "white" }}>
        키 정보
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker label="StartTime" defaultValue={startTime} />
          <TimePicker label="EndTime" defaultValue={endTime} />
        </LocalizationProvider>
      </Grid>
    </>
  );
};

export default KeyInfo;
