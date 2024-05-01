import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import GoogleLogin from "./pages/loginPage";
import Home from "./pages/homePage";
import Register from "./pages/registerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
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
