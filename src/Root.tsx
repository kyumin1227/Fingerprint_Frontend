import { Container, Grid } from "@mui/material";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./assets/reset.css";
import BottomBar from "./components/BottomBar";
import AlertModal from "./components/AlertModal";
import StayLogin from "./components/StayLogin";
import { useSelector } from "react-redux";
import { stateType } from "./store";

function Root() {
  const { loginCheck } = useSelector((state: stateType) => state.google);
  const { pathname } = useLocation();

  if (!loginCheck && pathname != "/login") {
    return (
      <>
        <StayLogin />
      </>
    );
  }

  if (
    pathname == "/login" ||
    pathname == "/register" ||
    pathname == "/kakao1" ||
    pathname == "/myinfo" ||
    pathname == "/role"
  ) {
    return (
      <>
        <Grid
          height="100vh"
          width="100%"
          bgcolor="#5C95FF"
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Outlet />
        </Grid>
        <AlertModal />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Container disableGutters style={{ height: "80vh" }}>
        <Outlet />
      </Container>
      <BottomBar />
      <AlertModal />
    </>
  );
}

export default Root;
