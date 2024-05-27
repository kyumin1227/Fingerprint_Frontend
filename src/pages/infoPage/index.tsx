import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { stateType } from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const userInfo = useSelector((state: stateType) => state.user);
  const navigate = useNavigate();

  const [email] = useState(userInfo.email);
  const [name] = useState(userInfo.name);
  const [kakao, setKakao] = useState(userInfo.kakao);
  const [studentNum] = useState(userInfo.studentNum);
  const [role] = useState(userInfo.role);

  const handleBack = () => {
    navigate(-1);
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
            sx={{ mb: 2 }}
            onChange={(e) => {
              e.currentTarget.value = studentNum;
            }}
          />
          <TextField
            required
            id="role"
            label="Role"
            defaultValue={role}
            fullWidth
            variant="filled"
            onChange={(e) => {
              e.currentTarget.value = role;
            }}
          />
        </Box>
        <Box mt={10} display={"flex"} justifyContent={"flex-start"}>
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
        </Box>
      </Grid>
      <Grid item xs={2} flexGrow={2}></Grid>
    </>
  );
};

export default MyInfo;
