import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { name: "", email: "", studentNum: "", kakao: "", role: "", picture: "" },
  reducers: {
    // 로그인 시 호출
    loginUser: (state, action: PayloadAction<UserInfoType>) => {
      const { name, email, picture } = action.payload;
      state.name = name;
      state.email = email;
      state.picture = picture;
    },
    // 로그아웃 또는 초기화 시 호출
    resetUser: (state) => {
      state.name = "";
      state.email = "";
      state.kakao = "";
      state.picture = "";
      state.role = "";
      state.studentNum = "";
    },
  },
});

export const { loginUser, resetUser } = userSlice.actions;

export default userSlice.reducer;
