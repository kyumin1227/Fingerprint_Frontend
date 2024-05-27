import Modal from "@mui/material/Modal";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { stateType } from "../store";
import { closeAlert } from "../store/Alert";

const AlertModal = () => {
  const { isOpen, message } = useSelector((state: stateType) => state.alert);

  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(closeAlert());
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="global-alert-modal-title"
      aria-describedby="global-alert-modal-description"
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <Typography variant="h5" id="global-alert-modal-title">
          Alert
        </Typography>
        <p id="global-alert-modal-description">{message}</p>
        <Button onClick={handleClose}>Close</Button>
      </div>
    </Modal>
  );
};

export default AlertModal;
