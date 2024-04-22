import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Root.tsx";
import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
