import { Box, Grid, Typography } from "@mui/material";
import GoogleLoginButton from "../../components/GoogleLoginButton";

const GoogleLogin = () => {
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
