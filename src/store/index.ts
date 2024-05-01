import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./GoogleAccount.ts";
import userReducer from "./UserInfo.ts";

export type stateType = {
  google: LoginGoogleType;
  user: UserInfoType;
};

export default configureStore({
  reducer: {
    google: googleReducer,
    user: userReducer,
  },
});
