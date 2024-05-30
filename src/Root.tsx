import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./assets/reset.css";
import BottomBar from "./components/BottomBar";
import AlertModal from "./components/AlertModal";
import StayLogin from "./components/StayLogin";
import { useSelector } from "react-redux";
import { stateType } from "./store";

function Root() {
  const { loginCheck } = useSelector((state: stateType) => state.google);
  if (!loginCheck) {
    return (
      <>
        <StayLogin />
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
