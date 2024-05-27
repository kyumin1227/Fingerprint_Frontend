import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../../store";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changeRole } from "../../api/role";
import { openAlert } from "../../store/Alert";
import { loginUser } from "../../store/UserInfo";

const Role = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { studentNum } = useSelector((state: stateType) => state.user);
  const { credential } = useSelector((state: stateType) => state.google);

  const role = useSelector((state: stateType) => state.user.role);
  const [roleCode, setRoleCode] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleChange = async () => {
    if (role == "guest") {
      dispatch(openAlert({ isOpen: true, message: "Guest는 권한을 변경할 수 없습니다." }));
      return;
    }
    const res = await changeRole(credential, studentNum, role, roleCode);
    if (res.success) {
      dispatch(loginUser(res.data));
    }
    dispatch(openAlert({ isOpen: true, message: res.message }));
  };

  return (
    <>
      <Grid>
        <Grid display={"flex"} alignItems={"center"} marginBottom="20%">
          <img src="./logo2/logo2_bg_remove.png" alt="" width="100px" />
          <Typography
            color={"white"}
            variant="h3"
            style={{ fontFamily: "Madimi One" }}
            marginLeft="15px"
            sx={{
              whiteSpace: "nowrap",
            }}
          >
            GSC - FP
          </Typography>
        </Grid>
        <Grid display={"flex"} flexDirection={"column"}>
          <TextField
            id="role"
            label="Role"
            defaultValue={role}
            variant="filled"
            sx={{ mb: 2 }}
            onChange={(e) => {
              e.currentTarget.value = role;
            }}
          />
          <TextField
            id="roleCode"
            label="Role Code"
            defaultValue={roleCode}
            variant="filled"
            onChange={(e) => {
              setRoleCode(e.currentTarget.value);
            }}
          />
        </Grid>
        <Box mt={10} display={"flex"} justifyContent={"space-between"}>
          <Button
            variant="contained"
            sx={{
              height: "60px",
              width: "48%",
              backgroundColor: "#F87575",
              ":active": {
                backgroundColor: "#F87575", // 클릭했을 때의 색상
              },
              ":focus": {
                backgroundColor: "#F87575", // 포커스 시 색상 유지
              },
            }}
            onClick={handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              height: "60px",
              width: "48%",
              backgroundColor: "#F87575",
              ":active": {
                backgroundColor: "#F87575", // 클릭했을 때의 색상
              },
              ":focus": {
                backgroundColor: "#F87575", // 포커스 시 색상 유지
              },
            }}
            onClick={handleChange}
          >
            Change
          </Button>
        </Box>
      </Grid>
    </>
  );
};

export default Role;
