import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFlag, faFolder } from "@fortawesome/free-solid-svg-icons";

const BottomBar = () => {
  return (
    <>
      <Grid container height="10vh" bgcolor="#5C95FF">
        <Grid item xs={4} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <FontAwesomeIcon icon={faFlag} color="white" fontSize={30} />
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
          <FontAwesomeIcon icon={faHouse} color="white" fontSize={30} />
        </Grid>
        <Grid item xs={4} display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <FontAwesomeIcon icon={faFolder} color="white" fontSize={30} />
        </Grid>
      </Grid>
    </>
  );
};

export default BottomBar;
