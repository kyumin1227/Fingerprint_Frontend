import { Grid, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { getKeyInfo } from "../api/key";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../store";
import {
  setKeyEndTime,
  setKeyInfo,
  setKeyStartTime,
  setKeyStudentRedux,
  setKeySubManagerRedux,
} from "../store/KeyInfo";

// TODO 시간 변경 기능 수정 필요
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

  const handleStartTime = (newTime: Dayjs | null) => {
    console.log(newTime);

    if (newTime) {
      dispatch(setKeyStartTime(newTime.format("HH:mm")));
    }
  };

  const handleEndTime = (newTime: Dayjs | null) => {
    console.log(newTime);

    if (newTime) {
      dispatch(setKeyEndTime(newTime.format("HH:mm")));
    }
  };

  useEffect(() => {
    const handleKeyInfo = async () => {
      const res = await getKeyInfo(key.date);

      dispatch(setKeyInfo(res.data));
    };

    handleKeyInfo();
  }, [key]);

  return (
    <>
      <Grid sx={{ backgroundColor: "white" }}>
        키 정보
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker label="StartTime" defaultValue={startTime} onChange={handleStartTime} value={startTime} />
          <TimePicker label="EndTime" defaultValue={endTime} onChange={handleEndTime} value={endTime} />
          <TextField
            label="KeyStudent"
            value={keyStudent}
            onChange={(e: any) => {
              dispatch(setKeyStudentRedux(e.target.value));
            }}
          />
          <TextField
            label="SubManager"
            value={subManager}
            onChange={(e: any) => {
              dispatch(setKeySubManagerRedux(e.target.value));
            }}
          />
        </LocalizationProvider>
      </Grid>
    </>
  );
};

export default KeyInfo;
