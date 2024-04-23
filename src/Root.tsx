import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./assets/reset.css";

function Root() {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm" disableGutters>
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
