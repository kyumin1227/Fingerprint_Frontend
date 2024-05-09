// import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";
import "./assets/reset.css";
import { Provider } from "react-redux";
import store from "./store";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/theme.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      {/* <React.StrictMode> */}
      <RouterProvider router={router} />
      {/* </React.StrictMode> */}
    </ThemeProvider>
  </Provider>
);
