import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginGoogle } from "../store/GoogleAccount";
import { googleLogin } from "../api/login";
import { loginUser } from "../store/UserInfo";

// 구글 로그인 버튼 수동 방식 변경으로 인해 더 이상 사용하지 않음
const GoogleLoginButton = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
  const navigate = useNavigate();

  const dispatch = useDispatch();

  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={async (credentialResponse) => {
            console.log(credentialResponse);
            const clientId: string = credentialResponse.clientId!;
            const credential: string = credentialResponse.credential!;
            dispatch(loginGoogle({ clientId, credential, loginCheck: true }));
            const res: response = await googleLogin(credential);
            console.log(res);

            if (res.success) {
              dispatch(loginUser(res.data));
              navigate("/");
            } else if (res.data != null) {
              dispatch(loginUser(res.data));
              navigate("/register");
            }
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </GoogleOAuthProvider>
    </>
  );
};

export default GoogleLoginButton;
