import { Box, Button, Grid } from "@mui/material";
import Calendar from "../../components/Calendar";
import KeyInfo from "../../components/KeyInfo";
import { useNavigate } from "react-router-dom";
import { getKeyInfo, postKeyInfo } from "../../api/key";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../store";
import { openAlert } from "../../store/Alert";
import { setKeyInfo } from "../../store/KeyInfo";

const Key = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { date, keyStudent, subManager, startTime, endTime, isHoliday } = useSelector((state: stateType) => state.key);
  const amendStudentNumber = useSelector((state: stateType) => state.user.studentNum);
  const now =
    new Date().getFullYear() +
    "-" +
    String(new Date().getMonth() + 1).padStart(2, "0") +
    "-" +
    String(new Date().getDate()).padStart(2, "0");
  const role = useSelector((state: stateType) => state.user.role);

  // 다시 들어왔을 때 현재 날짜의 데이터를 보여줘야 함으로 다른 페이지로 이동할 때 미리 데이터 세팅
  const handleBack = async () => {
    const res = await getKeyInfo(now);

    dispatch(setKeyInfo(res.data));
    navigate(-1);
  };

  // 저장
  const handleSave = async () => {
    console.log("amendStudentNumber", amendStudentNumber);

    if (role === "Student" || role === "guest") {
      dispatch(openAlert({ isOpen: true, message: "권한이 없습니다." }));
      return;
    }

    try {
      const res = await postKeyInfo(date, keyStudent, subManager, startTime, endTime, amendStudentNumber, isHoliday);
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
        <Box mt={2} display={"flex"} justifyContent={"space-between"} width="100%">
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
