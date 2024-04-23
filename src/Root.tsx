import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./assets/reset.css";
import BottomBar from "./components/BottomBar";

function Root() {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm" disableGutters style={{ height: "80vh" }}>
        <Outlet />
      </Container>
      <BottomBar />
    </>
  );
}

export default Root;
