import { configureStore } from "@reduxjs/toolkit";
import googleReducer from "./GoogleAccount.ts";

export default configureStore({
  reducer: {
    google: googleReducer,
  },
});
