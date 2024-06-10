import { Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material";
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
  const seletedDate = useSelector((state: stateType) => state.key.date);

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
      <Grid sx={{ backgroundColor: "white", width: "320px", p: 2 }} display={"flex"} flexDirection={"column"}>
        <Grid display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={3}>
          <Typography variant="h5">{seletedDate}</Typography>
          <FormControlLabel control={<Checkbox checked={isHoliday} onChange={handleIsHoliday} />} label="Holiday" />
        </Grid>
        <Typography variant="h6" mb={1}>
          열쇠 책임자
        </Typography>
        <Grid container display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
          <Grid item display={"flex"} justifyContent={"center"} xs={7}>
            <TextField label="Name" disabled value={key.keyStudentName} />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="KeyStudent"
              value={keyStudent}
              onChange={(e: any) => {
                dispatch(setKeyInfo({ ...key, keyStudent: e.target.value }));
              }}
            />
          </Grid>
        </Grid>
        <Typography variant="h6" mb={1}>
          부 책임자
        </Typography>
        <Grid container display={"flex"} justifyContent={"space-between"} alignItems={"center"} mb={2}>
          <Grid item display={"flex"} justifyContent={"center"} xs={7}>
            <TextField label="Name" disabled value={key.subManagerName} />
          </Grid>
          <Grid item xs={5}>
            <TextField
              label="SubManager"
              value={subManager}
              onChange={(e: any) => {
                dispatch(setKeyInfo({ ...key, subManager: e.target.value }));
              }}
            />
          </Grid>
        </Grid>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid display={"flex"} justifyContent={"space-between"}>
            <TimePicker
              label="StartTime"
              defaultValue={startTime}
              sx={{ width: "35%" }}
              onChange={handleStartTime}
              value={startTime}
            />
            <Typography variant="h4" width="30px">
              〜
            </Typography>
            <TimePicker
              label="EndTime"
              defaultValue={endTime}
              sx={{ width: "35%" }}
              onChange={handleEndTime}
              value={endTime}
            />
          </Grid>
        </LocalizationProvider>
        <Typography component="p" mt={1}>
          수정 일시: {key.amendDate}
        </Typography>
      </Grid>
    </>
  );
};

export default KeyInfo;
