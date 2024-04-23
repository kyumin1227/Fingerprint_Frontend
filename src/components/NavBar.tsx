import { Grid, Typography } from "@mui/material";

const NavBar = () => {
  return (
    <>
      <Grid container height="10vh" bgcolor="#5C95FF">
        <Grid item xs={10} display={"flex"} alignItems={"center"}>
          <img src="./logo2/logo2_bg_remove.png" width="20%" style={{ marginLeft: "3%" }} />
          <Typography color={"white"} variant="h4" style={{ fontFamily: "Madimi One" }} marginLeft="3%">
            GSC - FP
          </Typography>
        </Grid>
        <Grid item xs={2}>
          fd
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;
