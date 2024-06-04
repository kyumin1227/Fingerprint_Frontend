import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const KeySlice = createSlice({
  name: "key",
  initialState: { date: "", keyStudent: "", subManager: "", startTime: "", endTime: "" },
  reducers: {
    setKeyInfo: (state, action: PayloadAction<KeyInfoType>) => {
      state.date = action.payload.date;
      state.keyStudent = action.payload.keyStudent;
      state.subManager = action.payload.subManager;
      state.startTime = action.payload.startTime;
      state.endTime = action.payload.endTime;
    },
    setDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
  },
});

export const { setKeyInfo } = KeySlice.actions;
export default KeySlice.reducer;
