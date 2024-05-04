import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import GoogleLogin from "./pages/loginPage";
import Home from "./pages/homePage";
import Register from "./pages/registerPage";
import Session from "./pages/sessionPage";
import SessionDate from "./pages/sessionPage/sessionDate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "sessions",
        element: <Session />,
      },
      {
        path: "sessions/:date",
        element: <SessionDate />,
      },
    ],
  },
  {
    path: "/login",
    element: <GoogleLogin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
