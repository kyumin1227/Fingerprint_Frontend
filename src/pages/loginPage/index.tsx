import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import GoogleLoginButton from "../../components/GoogleLoginButton";

const GoogleLogin = () => {
  // const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
  // const redirectUri = import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI;

  // useEffect(() => {
  //   console.log(clientId);
  //   console.log(redirectUri);
  // }, []);

  // const navigate = useNavigate();

  // const handleNavigateBack = () => {
  //   navigate(-1);
  // };

  // const handleLogin = () => {
  //   // 구글 로그인 화면으로 이동시키기
  //   window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`;
  // };

  return (
    <Box height="100vh" width="100%" bgcolor="#5C95FF" display={"flex"} alignItems={"center"} justifyContent={"center"}>
      <Grid>
        <Grid display={"flex"} alignItems={"center"} marginBottom="20%">
          <img src="./logo2/logo2_bg_remove.png" alt="" width="100px" />
          <Typography color={"white"} variant="h3" style={{ fontFamily: "Madimi One" }} marginLeft="15px">
            GSC - FP
          </Typography>
        </Grid>
        <Grid display={"flex"} justifyContent={"center"} marginBottom="30%">
          <GoogleLoginButton></GoogleLoginButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GoogleLogin;
