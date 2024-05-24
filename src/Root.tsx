import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./assets/reset.css";
import BottomBar from "./components/BottomBar";
import AlertModal from "./components/AlertModal";

function Root() {
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
