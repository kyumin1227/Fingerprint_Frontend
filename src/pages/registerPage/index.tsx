import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { stateType } from "../../store";
import { googleRegister } from "../../api/googleLogin";

// TODO: 하나라도 빈 값이 있는 경우 버튼 클릭 시 요청 반려

const Register = () => {
  const userInfo = useSelector((state: stateType) => state.user);
  const google = useSelector((state: stateType) => state.google);

  const [email, setEmail] = useState(userInfo.email);
  const [name, setName] = useState(userInfo.name);
  const [kakao, setKakao] = useState("");
  const [studentNum, setStudentNum] = useState("");

  const handleRegister = async () => {
    const res = await googleRegister(google.credential, email, name, kakao, studentNum);
  };

  return (
    <>
      <Grid
        container
        height="100vh"
        width="100%"
        bgcolor="#5C95FF"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item xs={2} flexGrow={2}></Grid>
        <Grid item maxWidth={500} width="66.66%">
          <Box sx={{ width: "100%" }} alignItems={"center"} display={"flex"} flexDirection={"column"}>
            <Grid display={"flex"} alignItems={"center"} marginBottom="20%">
              <img src="./logo2/logo2_bg_remove.png" alt="" width="100px" />
              <Typography
                color={"white"}
                variant="h3"
                style={{ fontFamily: "Madimi One" }}
                marginLeft="15px"
                sx={{
                  whiteSpace: "nowrap",
                }}
              >
                GSC - FP
              </Typography>
            </Grid>
            <TextField
              required
              disabled
              id="email"
              label="Email"
              defaultValue={email}
              fullWidth
              variant="filled"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              disabled
              id="name"
              label="Name"
              defaultValue={name}
              fullWidth
              variant="filled"
              sx={{ mb: 2 }}
            />
            <TextField
              required
              id="kakao"
              label="Kakao ID"
              defaultValue={kakao}
              fullWidth
              variant="filled"
              sx={{ mb: 2 }}
              onChange={(e) => {
                setKakao(e.currentTarget.value);
              }}
            />
            <TextField
              required
              id="studentNum"
              label="Student Number"
              defaultValue={studentNum}
              fullWidth
              variant="filled"
              onChange={(e) => {
                setStudentNum(e.currentTarget.value);
              }}
            />
          </Box>
          <Box mt={10} display={"flex"} justifyContent={"flex-end"}>
            <Button
              variant="contained"
              sx={{
                height: "60px",
                backgroundColor: "#F87575",
                ":active": {
                  backgroundColor: "#F87575", // 클릭했을 때의 색상
                },
                ":focus": {
                  backgroundColor: "#F87575", // 포커스 시 색상 유지
                },
              }}
              onClick={handleRegister}
            >
              Register
            </Button>
          </Box>
        </Grid>
        <Grid item xs={2} flexGrow={2}></Grid>
      </Grid>
    </>
  );
};

export default Register;
