import { Outlet } from "react-router-dom";
import AlertModal from "./components/AlertModal";
import { Grid } from "@mui/material";

const RootBackground = () => {
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
