import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./GoogleAccount.ts";
import userReducer from "./UserInfo.ts";
import sessionReducer from "./SessionInfo.ts";
import alertReducer from "./Alert.ts";
import keyReducer from "./KeyInfo.ts";

export type stateType = {
  google: LoginGoogleType;
  user: UserInfoType;
  session: SessionInfoType;
  alert: AlertType;
  key: KeyInfoType;
};

export default configureStore({
  reducer: {
    google: googleReducer,
    user: userReducer,
    session: sessionReducer,
    alert: alertReducer,
    key: keyReducer,
  },
});
