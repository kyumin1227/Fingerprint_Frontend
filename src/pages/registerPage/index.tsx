import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../store";
import { googleLogin, googleRegister } from "../../api/googleLogin";
import { loginUser } from "../../store/UserInfo";
import { useNavigate } from "react-router-dom";

// TODO 하나라도 빈 값이 있는 경우 버튼 클릭 시 요청 반려

const Register = () => {
  const userInfo = useSelector((state: stateType) => state.user);
  const google = useSelector((state: stateType) => state.google);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email] = useState(userInfo.email);
  const [name] = useState(userInfo.name);
  const [kakao, setKakao] = useState("");
  const [studentNum, setStudentNum] = useState("");

  const handleRegister = async () => {
    const res: response = await googleRegister(google.credential, email, name, kakao, studentNum);

    if (res.success) {
      const loginRes: response = await googleLogin(google.credential);

      if (loginRes.success) {
        dispatch(loginUser(loginRes.data));
        navigate("/");
      } else {
      }
    }
  };

  return (
    <>
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
            id="email"
            label="Email"
            defaultValue={email}
            fullWidth
            variant="filled"
            sx={{ mb: 2 }}
            onChange={(e) => (e.currentTarget.value = email)}
          />
          <TextField
            required
            id="name"
            label="Name"
            defaultValue={name}
            fullWidth
            variant="filled"
            sx={{ mb: 2 }}
            onChange={(e) => (e.currentTarget.value = name)}
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
    </>
  );
};

export default Register;
