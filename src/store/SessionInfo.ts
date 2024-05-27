import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const sessionSlice = createSlice({
  name: "session",
  initialState: [
    { date: "", sign: false, people: 0, isHoliday: false, isAble: false },
    { date: "", sign: false, people: 0, isHoliday: false, isAble: false },
    { date: "", sign: false, people: 0, isHoliday: false, isAble: false },
    { date: "", sign: false, people: 0, isHoliday: false, isAble: false },
    { date: "", sign: false, people: 0, isHoliday: false, isAble: false },
    { date: "", sign: false, people: 0, isHoliday: false, isAble: false },
    { date: "", sign: false, people: 0, isHoliday: false, isAble: false },
  ],
  reducers: {
    // 전체 세션 변경
    setSession: (state, action: PayloadAction<SessionInfoType>) => {
      for (let i = 0; i < state.length; i++) {
        state[i].date = action.payload[i].date;
        state[i].sign = action.payload[i].sign;
        state[i].people = action.payload[i].people;
        state[i].isHoliday = action.payload[i].isHoliday;
        state[i].isAble = action.payload[i].isAble;
      }
    },
    updateSession: (state, action) => {
      for (let i = 0; i < state.length; i++) {
        if (state[i].date == action.payload) {
          if (state[i].sign) {
            state[i].sign = false;
            state[i].people -= 1;
          } else {
            state[i].sign = true;
            state[i].people += 1;
          }
        }
      }
    },
    // 전체 세션 초기화
    resetSession: (state) => {
      for (let i = 0; i < state.length; i++) {
        (state[i].date = ""),
          (state[i].isHoliday = false),
          (state[i].people = 0),
          (state[i].sign = false),
          (state[i].isAble = false);
      }
    },
  },
});

export const { setSession, resetSession, updateSession } = sessionSlice.actions;

export default sessionSlice.reducer;
