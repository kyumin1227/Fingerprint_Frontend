import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { stateType } from "../../../store";
import { Container, Grid, IconButton, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Result = () => {
  const { date } = useParams();
  const data = useSelector((state: stateType) => state.session);
  const index = data.findIndex((item) => item.date == date);
  const navigate = useNavigate();
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

  console.log(date);

  return (
    <>
      <Container sx={{ backgroundColor: "#D9D9D9", height: "100%", width: "100%" }} disableGutters>
        <Grid container paddingTop="5%" height="15%">
          <Grid item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton aria-label="delete" size="large" onClick={handleLeft}>
              <ArrowCircleLeftIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Grid>
          <Grid item xs={8} display={"flex"} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
            <Typography variant="h5">
              {date?.slice(0, 4)}년 {date?.slice(5, 7)}월 {date?.slice(8, 10)}일
            </Typography>
            {data[index].isHoliday ? (
              <Typography variant="h5">공휴일 출석 결과</Typography>
            ) : (
              <Typography variant="h5">야간 자율학습 연장 결과</Typography>
            )}
          </Grid>
          <Grid item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <IconButton aria-label="delete" size="large" onClick={handleRight}>
              <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
            </IconButton>
          </Grid>
        </Grid>
        {data[index].people >= 5 ? (
          <>
            <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Grid>
                <img src="../resultImage/good_removebg.png" width="100%" />
              </Grid>
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height="15%"
              flexDirection={"column"}
            >
              <Typography variant="h6">연장되었습니다</Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <Grid>
                <img src="../resultImage/bad_removebg.png" width="100%" />
              </Grid>
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              height="15%"
              flexDirection={"column"}
            >
              <Typography variant="h6">오늘은 쉽니다</Typography>
            </Grid>
          </>
        )}
      </Container>
    </>
  );
};

export default Result;
