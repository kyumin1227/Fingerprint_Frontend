import { Box, Button, Grid } from "@mui/material";
import Calendar from "../../components/Calendar";
import KeyInfo from "../../components/KeyInfo";

// TODO 키 정보 보내는 기능 필요
const Key = () => {
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
          >
            SAVE
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Key;
