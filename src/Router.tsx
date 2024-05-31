import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import GoogleLogin from "./pages/loginPage";
import Home from "./pages/homePage";
import Register from "./pages/registerPage";
import Session from "./pages/sessionPage";
import SessionDate from "./pages/sessionPage/sessionDate";
import Kakao from "./pages/kakaoPage";
import AuthPage from "./pages/kakaoPage/authPage";
import GoogleCode from "./pages/loginPage/GoogleCode";
import AlertModal from "./components/AlertModal";
import RootBackground from "./Root_Backgroud";
import MyInfo from "./pages/infoPage";
import Role from "./pages/rolePage";
import PrivacyPolicy from "./pages/privacyPage/privacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sessions",
        element: <Session />,
      },
      {
        path: "/sessions/:date",
        element: <SessionDate />,
      },
      {
        path: "/auth",
        element: <AuthPage />,
      },
    ],
  },
  {
    path: "/",
    element: <RootBackground />,
    children: [
      {
        path: "/login",
        element: <GoogleLogin />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/kakao1",
        element: <Kakao />,
      },
      {
        path: "/myinfo",
        element: <MyInfo />,
      },
      {
        path: "/role",
        element: <Role />,
      },
    ],
  },
  {
    path: "/oauth2/code/google",
    element: (
      <>
        <GoogleCode />
        <AlertModal />
      </>
    ),
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
  },
]);

export default router;
