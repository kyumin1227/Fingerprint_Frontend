import { useNavigate } from "react-router-dom";
import { Box, Button } from "@mui/material";
import { useEffect } from "react";

const GoogleLogin = () => {
  const clientId = import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI;

  useEffect(() => {
    console.log(clientId);
    console.log(redirectUri);
  }, []);

  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  const handleLogin = () => {
    // 구글 로그인 화면으로 이동시키기
    window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code&scope=email profile`;
  };

  return (
    <>
      <Box>
        <Button onClick={handleLogin}>구글 로그인</Button>
      </Box>
    </>
  );
};

export default GoogleLogin;
