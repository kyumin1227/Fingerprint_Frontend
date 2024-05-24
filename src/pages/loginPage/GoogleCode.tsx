import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { googleGetToken, googleLogin } from "../../api/googleLogin";
import { loginUser } from "../../store/UserInfo";
import { loginGoogle } from "../../store/GoogleAccount";
import { openAlert } from "../../store/Alert";

const GoogleCode = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code") ?? "";
      const client_id = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
      const client_secret = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_SECRET;
      const redirect_uri = import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI;
      const grant_type = "authorization_code";

      try {
        const res: getTokenType = await googleGetToken(code, client_id, client_secret, redirect_uri, grant_type);
        console.log(res);

        if (res.status === 200) {
          console.log(res.data.id_token);
          const clientId = client_id;
          const credential = res.data.id_token;
          dispatch(loginGoogle({ clientId, credential }));
          const loginRes = await googleLogin(res.data.id_token);
          console.log(loginRes);

          if (loginRes.success) {
            dispatch(loginUser(loginRes.data));
            navigate("/");
          } else if (loginRes.data != null) {
            dispatch(loginUser(loginRes.data));
            navigate("/register");
          } else {
            dispatch(openAlert({ isOpen: true, message: loginRes.message }));
            navigate("/login");
          }
        } else {
          dispatch(openAlert({ isOpen: true, message: "어딘지 몰라" }));
          navigate("/login");
        }
      } catch (error) {
        console.error(error);
        dispatch(openAlert({ isOpen: true, message: "알수 없는 에러 발생" }));
        navigate("/login");
      }
    };

    fetchData();
  }, [location.search, navigate, dispatch]);

  return <>Loading...</>;
};

export default GoogleCode;
