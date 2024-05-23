import { Box, Button, Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFlag, faFolder } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();

  const handleSession = () => {
    navigate("/sessions");
  };

  const handleHome = () => {
    navigate("/");
  };
  return (
    <>
      <Grid container height="10vh" bgcolor="#5C95FF">
        <Grid item xs={4} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <FontAwesomeIcon icon={faFlag} color="white" fontSize={30} width="100%" />
        </Grid>
        <Grid
          item
          xs={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderLeft={1}
          borderRight={1}
          borderColor={"white"}
        >
          <Button sx={{ width: "100%", height: "100%" }} onClick={handleHome}>
            <FontAwesomeIcon icon={faHouse} color="white" fontSize={30} />
          </Button>
        </Grid>
        <Grid item xs={4} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <Button sx={{ width: "100%", height: "100%" }} onClick={handleSession}>
            <FontAwesomeIcon icon={faFolder} color="white" fontSize={30} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default BottomBar;
