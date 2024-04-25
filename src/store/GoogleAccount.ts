import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const googleSlice = createSlice({
  name: "google",
  initialState: { clientId: "", credential: "" },
  reducers: {
    loginGoogle: (state, action: PayloadAction<LoginGoogleType>) => {
      const { clientId, credential } = action.payload;
      state.clientId = clientId;
      state.credential = credential;
    },
  },
});

export const { loginGoogle } = googleSlice.actions;

export default googleSlice.reducer;
