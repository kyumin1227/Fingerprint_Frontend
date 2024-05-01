import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { name: "", email: "", studentNum: "", kakao: "", role: "" },
  reducers: {
    // 로그인 시 호출
    loginUser: (state, action: PayloadAction<UserInfoType>) => {
      const { name, email } = action.payload;
      state.name = name;
      state.email = email;
    },
  },
});

export const { loginUser } = userSlice.actions;

export default userSlice.reducer;
