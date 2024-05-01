import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./GoogleAccount.ts";
import userReducer from "./UserInfo.ts";

export default configureStore({
  reducer: {
    google: googleReducer,
    user: userReducer,
  },
});
