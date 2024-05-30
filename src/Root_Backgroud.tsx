import { Outlet, useLocation } from "react-router-dom";
import AlertModal from "./components/AlertModal";
import { Grid } from "@mui/material";
import StayLogin from "./components/StayLogin";
import { useSelector } from "react-redux";
import { stateType } from "./store";

const RootBackground = () => {
  const { loginCheck } = useSelector((state: stateType) => state.google);
  const { pathname } = useLocation();

  if (!loginCheck && pathname != "/login") {
    return (
      <>
        <StayLogin />
      </>
    );
  }
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
};

export default RootBackground;
