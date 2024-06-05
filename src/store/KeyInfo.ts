import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const date =
  new Date().getFullYear() +
  "-" +
  String(new Date().getMonth() + 1).padStart(2, "0") +
  "-" +
  String(new Date().getDate()).padStart(2, "0");

export const KeySlice = createSlice({
  name: "key",
  initialState: { date: date, keyStudent: "", subManager: "", startTime: "", endTime: "", amendDate: "" },
  reducers: {
    setKeyInfo: (state, action: PayloadAction<KeyInfoType>) => {
      state.date = action.payload.date;
      state.keyStudent = action.payload.keyStudent;
      state.subManager = action.payload.subManager;
      state.startTime = action.payload.startTime;
      state.endTime = action.payload.endTime;
      state.amendDate = action.payload.amendDate;
    },
    setKeyDate: (state, action: PayloadAction<string>) => {
      state.date = action.payload;
    },
    setKeyStartTime: (state, action: PayloadAction<string>) => {
      state.startTime = action.payload;
    },
    setKeyEndTime: (state, action: PayloadAction<string>) => {
      state.endTime = action.payload;
    },
    setKeyStudentRedux: (state, action: PayloadAction<string>) => {
      state.keyStudent = action.payload;
    },
    setKeySubManagerRedux: (state, action: PayloadAction<string>) => {
      state.subManager = action.payload;
    },
  },
});

export const { setKeyInfo, setKeyDate, setKeyStartTime, setKeyEndTime, setKeyStudentRedux, setKeySubManagerRedux } =
  KeySlice.actions;
export default KeySlice.reducer;
