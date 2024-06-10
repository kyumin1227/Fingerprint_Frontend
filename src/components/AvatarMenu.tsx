import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import GitHubIcon from "@mui/icons-material/GitHub";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../store";
import { useNavigate } from "react-router-dom";
import { resetGoogle } from "../store/GoogleAccount";
import { resetUser } from "../store/UserInfo";
import { Grid, Typography } from "@mui/material";

export default function AvatarMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const picture = useSelector((state: stateType) => state.user.picture);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(resetGoogle());
    dispatch(resetUser());
    sessionStorage.removeItem("credential");
    navigate("/login");
  };

  const handleSource = () => {
    window.open("https://github.com/kyumin1227/Fingerprint", "_blank");
  };

  const handleInfo = () => {
    navigate("/myinfo");
  };

  const handleRole = () => {
    navigate("/role");
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 60, height: 60 }} src={picture} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&::before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleInfo}>
          <Avatar /> MyInfo
        </MenuItem>
        <Grid display={"flex"} justifyContent={"center"} my={1}>
          <img src="./kakao/kakao_login_medium_narrow.png" onClick={() => navigate("/kakao1")} />
        </Grid>
        <Divider />
        <MenuItem onClick={handleSource}>
          <ListItemIcon>
            <GitHubIcon fontSize="small" />
          </ListItemIcon>
          View Source Code
        </MenuItem>
        <MenuItem onClick={handleRole}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Role Change
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        <Grid display={"flex"} justifyContent={"center"}>
          <Typography>v.1.0.0</Typography>
        </Grid>
      </Menu>
    </React.Fragment>
  );
}
