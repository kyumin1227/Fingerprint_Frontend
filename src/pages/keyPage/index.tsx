import { Box, Button, Grid } from "@mui/material";
import Calendar from "../../components/Calendar";
import KeyInfo from "../../components/KeyInfo";
import { useNavigate } from "react-router-dom";
import { postKeyInfo } from "../../api/key";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../store";
import { openAlert } from "../../store/Alert";
import { setKeyInfo } from "../../store/KeyInfo";

// TODO 키 정보 보내는 기능 필요
const Key = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { date, keyStudent, subManager, startTime, endTime } = useSelector((state: stateType) => state.key);
  const amendStudentNumber = useSelector((state: stateType) => state.user.studentNum);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSave = async () => {
    console.log("amendStudentNumber", amendStudentNumber);

    try {
      const res = await postKeyInfo(date, keyStudent, subManager, startTime, endTime, amendStudentNumber);
      console.log(res);
      if (!res.success) {
        dispatch(openAlert({ isOpen: true, message: res.message }));
      } else {
        dispatch(setKeyInfo(res.data));
      }
    } catch (e: any) {
      dispatch(openAlert({ isOpen: true, message: e.message }));
    }
  };

  return (
    <>
      <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Calendar />
        <KeyInfo />
        <Box mt={10} display={"flex"} justifyContent={"space-between"} width="100%">
          <Button
            variant="contained"
            sx={{
              height: "60px",
              width: "48%",
              backgroundColor: "#F87575",
              ":active": {
                backgroundColor: "#F87575", // 클릭했을 때의 색상
              },
              ":focus": {
                backgroundColor: "#F87575", // 포커스 시 색상 유지
              },
            }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              height: "60px",
              width: "48%",
              backgroundColor: "#F87575",
              ":active": {
                backgroundColor: "#F87575", // 클릭했을 때의 색상
              },
              ":focus": {
                backgroundColor: "#F87575", // 포커스 시 색상 유지
              },
            }}
            onClick={handleSave}
          >
            SAVE
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Key;
