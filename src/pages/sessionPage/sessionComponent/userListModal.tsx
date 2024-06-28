import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, List, ListItem } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

type ModalPropsType = {
  open: boolean;
  handleClose: () => void;
  date: string;
  userList: { name: string; studentNumber: string }[];
};

/**
 * 유저 리스트를 표시하는 모달
 * @param open
 * @param handleClose (모달 닫는 함수)
 * @param date (날짜)
 * @param userList (표시할 리스트)
 * @returns
 */
const UserListModal: React.FC<ModalPropsType> = ({ open, handleClose, date, userList }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {date} 신청 인원
          </Typography>
          {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}> */}
          <List id="modal-modal-description">
            <ListItem key={-1}>
              <Grid width={"100%"} display={"flex"} justifyContent={"space-around"}>
                <span>학번</span>
                <span>이름</span>
              </Grid>
            </ListItem>
            {userList.map((student, index) => {
              return (
                <ListItem key={index}>
                  <Grid width={"100%"} display={"flex"} justifyContent={"space-between"}>
                    <span>{student.studentNumber}</span>
                    <span>{student.name}</span>
                  </Grid>
                </ListItem>
              );
            })}
          </List>
          {/* </Typography> */}
        </Box>
      </Modal>
    </div>
  );
};

export default UserListModal;
