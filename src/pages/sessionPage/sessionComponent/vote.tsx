import { Button, Container, Grid, IconButton, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../../store";
import { sendApply } from "../../../api/session";
import { updateSession } from "../../../store/SessionInfo";
import { openAlert } from "../../../store/Alert";

function getKoreanDay(dateString: string) {
  // 주어진 문자열을 Date 객체로 변환
  const date = new Date(dateString);
  // 요일을 가져옴 (0: 일요일, 1: 월요일, ..., 6: 토요일)
  const day = date.getDay();
  // 한글 요일 배열
  const days = ["일", "월", "화", "수", "목", "금", "토"];
  // 해당하는 한글 요일 반환
  return days[day];
}

const Vote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((state: stateType) => state.session);
  const { date } = useParams();
  const index = data.findIndex((item) => item.date == date);
  const stdNum = useSelector((state: stateType) => state.user.studentNum);
  const credential = useSelector((state: stateType) => state.google.credential);

  console.log(date);
  console.log(data);

  const handleLeft = () => {
    if (index == 0) {
      return;
    } else {
      navigate(`/sessions/${data[index - 1].date}`);
    }
  };

  const handleRight = () => {
    if (index == 6) {
      return;
    } else {
      navigate(`/sessions/${data[index + 1].date}`);
    }
  };

  const handleApply = async () => {
    if (credential == "") {
      dispatch(openAlert({ isOpen: true, message: "Guest는 신청 할 수 없습니다." }));
      return;
    }
    const res = await sendApply(date ?? "", stdNum, data[index].sign, credential);
    if (res.success) {
      dispatch(updateSession(date));
    }
  };
  return (
    <Container sx={{ backgroundColor: "#D9D9D9", height: "100%", width: "100%" }} disableGutters>
      <Grid container paddingTop="5%" height="15%">
        <Grid item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconButton aria-label="delete" size="large" onClick={handleLeft}>
            <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Grid>
        <Grid item xs={8} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <Typography variant="h5">
            {date?.slice(0, 4)}년 {date?.slice(5, 7)}월 {date?.slice(8, 10)}일 ({getKoreanDay(date ?? "")})
          </Typography>
          {data[index].isHoliday ? (
            <Typography variant="h5">공휴일 출석 신청</Typography>
          ) : (
            <Typography variant="h5">야간 자율학습 연장 신청</Typography>
          )}
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <IconButton aria-label="delete" size="large" onClick={handleRight}>
            <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
          </IconButton>
        </Grid>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height="45%" flexDirection={"column"}>
        <PersonIcon sx={{ fontSize: 200 }} />
        <Typography variant="h3">{data[index].people} / 5</Typography>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height="20%">
        {data[index].sign ? (
          <Button
            variant="contained"
            sx={{
              fontSize: 35,
              width: 250,
              height: 120,
              backgroundColor: "#8B8C89",
              borderRadius: 20,
              ":hover": {
                backgroundColor: "#8B8C89", // 호버 상태일 때의 배경 색상
              },
              ":active": {
                backgroundColor: "#8B8C89", // 클릭 상태일 때의 배경 색상
              },
              ":focus": {
                backgroundColor: "#8B8C89", // 포커스 상태일 때의 배경 색상
              },
            }}
            onClick={handleApply}
          >
            신청 취소
          </Button>
        ) : (
          <Button
            variant="contained"
            sx={{
              fontSize: 35,
              width: 250,
              height: 120,
              backgroundColor: "#F87575",
              borderRadius: 20,
              ":hover": {
                backgroundColor: "#F87575", // 호버 상태일 때의 배경 색상
              },
              ":active": {
                backgroundColor: "#F87575", // 클릭 상태일 때의 배경 색상
              },
              ":focus": {
                backgroundColor: "#F87575", // 포커스 상태일 때의 배경 색상
              },
            }}
            onClick={handleApply}
          >
            신청
          </Button>
        )}
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} height="15%" flexDirection={"column"}>
        <Typography variant="h6">평일 연장 여부는 당일 17시 이후</Typography>
        <Typography variant="h6">주말, 공휴일 오픈 여부는 전날 22시</Typography>
        <Typography variant="h6">신청 인원에 한해 카톡으로 발송됩니다.</Typography>
      </Grid>
    </Container>
  );
};

export default Vote;
