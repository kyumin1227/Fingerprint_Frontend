import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./GoogleAccount.ts";
import userReducer from "./UserInfo.ts";
import sessionReducer from "./SessionInfo.ts";

export type stateType = {
  google: LoginGoogleType;
  user: UserInfoType;
  session: SessionInfoType;
};

export default configureStore({
  reducer: {
    google: googleReducer,
    user: userReducer,
    session: sessionReducer,
  },
});
