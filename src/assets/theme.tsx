import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    // TextField 흰색
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-input": {
            color: "black", // 입력 텍스트 색상
          },
          "& .MuiInputLabel-root": {
            color: "rgba(0, 0, 0, 0.6)", // 라벨 색상
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(0, 0, 0, 0.23)", // 테두리 색상
            },
            "&:hover fieldset": {
              borderColor: "black", // 호버 시 테두리 색상
            },
            "&.Mui-focused fieldset": {
              borderColor: "blue", // 포커스 시 테두리 색상
            },
          },
          "& .MuiFilledInput-root": {
            backgroundColor: "white", // 배경색
            "&:hover": {
              backgroundColor: "white",
              "@media (hover: none)": {
                backgroundColor: "white",
              },
            },
            "&.Mui-focused": {
              backgroundColor: "white",
            },
          },
        },
      },
    },
  },
});

export default theme;
