import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const googleSlice = createSlice({
  name: "google",
  initialState: { clientId: "", credential: "", loginCheck: false },
  reducers: {
    // 로그인 시 호출
    loginGoogle: (state, action: PayloadAction<LoginGoogleType>) => {
      const { clientId, credential } = action.payload;
      state.clientId = clientId;
      state.credential = credential;
      state.loginCheck = true;
    },
    // 로그아웃 또는 초기화 시 호출
    resetGoogle: (state) => {
      state.clientId = "";
      state.credential = "";
      state.loginCheck = false;
    },
    checkLogin: (state) => {
      state.loginCheck = true;
    },
  },
});

export const { loginGoogle, resetGoogle, checkLogin } = googleSlice.actions;
export default googleSlice.reducer;
