import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { kakaoSendToken } from "../../api/login";
import { useDispatch, useSelector } from "react-redux";
import { openAlert } from "../../store/Alert";
import { stateType } from "../../store";

const AuthPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { studentNumber } = useSelector((state: stateType) => state.user);

  useEffect(() => {
    const fetchToken = async () => {
      const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI;
      const code = new URL(window.location.href).searchParams.get("code");

      try {
        const res = await kakaoSendToken(redirect_uri, code || "", studentNumber);
        console.log(res);
        // 예를 들어, 응답에 따라 페이지를 리다이렉트하거나 다른 작업을 수행
        if (res.success) {
          navigate("/"); // 성공시 이동할 경로
        } else {
          navigate("/kakao1"); // 실패시 이동할 경로
        }
      } catch (error) {
        dispatch(
          openAlert({
            isOpen: true,
            message: "서버와의 통신에 오류가 발생하였습니다. \n카카오 로그인 페이지로 돌아갑니다.",
          })
        );
        navigate("/kakao1"); // 에러 발생시 이동할 경로
      }
    };

    fetchToken();
  }, [navigate]);

  return <div>Loading...</div>;
};

export default AuthPage;
