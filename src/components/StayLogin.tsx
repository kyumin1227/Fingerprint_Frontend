import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { googleLogin } from "../api/login";
import { loginUser } from "../store/UserInfo";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../store/GoogleAccount";
import { openAlert } from "../store/Alert";

/**
 * 새로고침 시 로그인 유지를 위한 컴포넌트
 */
const StayLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const guestData: UserInfoType = {
    name: "Guest",
    email: "guest@guest",
    studentNum: "guest",
    studentNumber: "guest",
    kakao: "guest",
    role: "guest",
    picture: "",
    language: "",
  };

  const credential = sessionStorage.getItem("credential");

  useEffect(() => {
    console.log("login check");

    const checkLogin = async () => {
      if (credential == null) {
        // 토큰 없는 경우
        navigate("/login");
      } else if (credential == "guest") {
        dispatch(loginUser(guestData));
        dispatch(loginGoogle({ clientId: "", credential, loginCheck: true }));
      } else {
        try {
          const res = await googleLogin(credential);
          if (res.success == false) {
            // 토큰은 가지고 있으나 유효기간 만료 또는 올바르지 않은 경우
            openAlert({ isOpen: true, message: "올바르지 않는 토큰입니다. \n로그인 화면으로 돌아갑니다." });
            navigate("/login");
          } else {
            // 정상적으로 로그인
            dispatch(loginUser(res.data));
            dispatch(loginGoogle({ clientId: "", credential, loginCheck: true }));
            console.log(res.data);
          }
        } catch {
          // 서버 응답 과정에서 오류가 발생한 경우
          dispatch(
            openAlert({ isOpen: true, message: "서버와의 연결에 오류가 발생했습니다. \n로그인 화면으로 돌아갑니다." })
          );
          navigate("/login");
        }
      }
    };

    checkLogin();
  }, []);
  return <></>;
};

export default StayLogin;
