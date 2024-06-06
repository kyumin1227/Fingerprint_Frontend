import { Checkbox, FormControlLabel, Grid, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { useEffect } from "react";
import { getKeyInfo } from "../api/key";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../store";
import { setKeyInfo } from "../store/KeyInfo";

const KeyInfo = () => {
  const dispatch = useDispatch();
  const key = useSelector((state: stateType) => state.key);

  const startTime = dayjs()
    .hour(Number(useSelector((state: stateType) => state.key.startTime).slice(0, 2)))
    .minute(Number(useSelector((state: stateType) => state.key.startTime).slice(3, 5)));
  const endTime = dayjs()
    .hour(Number(useSelector((state: stateType) => state.key.endTime).slice(0, 2)))
    .minute(Number(useSelector((state: stateType) => state.key.endTime).slice(3, 5)));
  const keyStudent = useSelector((state: stateType) => state.key.keyStudent) ?? "";
  const subManager = useSelector((state: stateType) => state.key.subManager) ?? "";
  const isHoliday = useSelector((state: stateType) => state.key.isHoliday) ?? false;

  const handleStartTime = (newTime: Dayjs | null) => {
    console.log(newTime);

    if (newTime) {
      dispatch(setKeyInfo({ ...key, startTime: newTime.format("HH:mm") }));
    }
  };

  const handleEndTime = (newTime: Dayjs | null) => {
    console.log(newTime);

    if (newTime) {
      dispatch(setKeyInfo({ ...key, endTime: newTime.format("HH:mm") }));
    }
  };

  const handleIsHoliday = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setKeyInfo({ ...key, isHoliday: e.target.checked }));
  };

  useEffect(() => {
    const handleKeyInfo = async () => {
      const res = await getKeyInfo(key.date);

      dispatch(setKeyInfo(res.data));
    };

    handleKeyInfo();
  }, [key.date, dispatch]);

  return (
    <>
      <Grid sx={{ backgroundColor: "white" }}>
        키 정보
        <FormControlLabel control={<Checkbox checked={isHoliday} onChange={handleIsHoliday} />} label="Holiday" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker label="StartTime" defaultValue={startTime} onChange={handleStartTime} value={startTime} />
          <TimePicker label="EndTime" defaultValue={endTime} onChange={handleEndTime} value={endTime} />
        </LocalizationProvider>
        <TextField
          label="KeyStudent"
          value={keyStudent}
          onChange={(e: any) => {
            dispatch(setKeyInfo({ ...key, keyStudent: e.target.value }));
          }}
        />
        <TextField
          label="SubManager"
          value={subManager}
          onChange={(e: any) => {
            dispatch(setKeyInfo({ ...key, subManager: e.target.value }));
          }}
        />
      </Grid>
    </>
  );
};

export default KeyInfo;
