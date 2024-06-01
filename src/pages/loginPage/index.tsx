import { Button, Grid, Typography } from "@mui/material";
import GoogleLoginButton2 from "../../components/GoogleLoginButton2";
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/UserInfo";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../../store/GoogleAccount";

const GoogleLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guestData: UserInfoType = {
    name: "Guest",
    email: "guest@guest",
    studentNum: "guest",
    studentNumber: "guest",
    kakao: "guest",
    role: "guest",
    picture: "",
    language: "",
  };
  const handleGuest = () => {
    dispatch(loginUser(guestData));
    dispatch(loginGoogle({ clientId: "", credential: "guest", loginCheck: true }));
    sessionStorage.setItem("credential", "guest");
    navigate("/");
  };
  return (
    <Grid>
      <Grid display={"flex"} alignItems={"center"} marginBottom="20%">
        <img src="./logo2/logo2_bg_remove.png" alt="" width="100px" />
        <Typography color={"white"} variant="h3" style={{ fontFamily: "Madimi One" }} marginLeft="15px">
          GSC - FP
        </Typography>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} marginBottom="5%">
        <GoogleLoginButton2 />
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} marginBottom="30%">
        <Button onClick={handleGuest}>Guest</Button>
      </Grid>
    </Grid>
  );
};

export default GoogleLogin;
