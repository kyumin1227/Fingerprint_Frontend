import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: { isOpen: false, message: "" },
  reducers: {
    openAlert: (state, action: PayloadAction<AlertType>) => {
      state.isOpen = true;
      state.message = action.payload.message;
    },
    closeAlert: (state) => {
      (state.isOpen = false), (state.message = "");
    },
  },
});

export const { openAlert, closeAlert } = alertSlice.actions;

export default alertSlice.reducer;
