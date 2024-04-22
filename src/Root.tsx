import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "/reset.css";

function Root() {
  return (
    <>
      <NavBar />
      <Container maxWidth="sm">
        <Outlet />
      </Container>
    </>
  );
}

export default Root;
