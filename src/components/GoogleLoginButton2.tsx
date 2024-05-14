const GoogleLoginButton2 = () => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${
    import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID
  }&redirect_uri=${import.meta.env.VITE_GOOGLE_AUTH_REDIRECT_URI}&response_type=code&scope=email profile`;

  const handleLogin = () => {
    window.location.href = url;
  };

  return (
    <>
      <img src="./google/png@1x/light/web_light_rd_SI@1x.png" onClick={handleLogin}></img>
    </>
  );
};

export default GoogleLoginButton2;
