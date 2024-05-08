const AuthPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);
  return <></>;
};

export default AuthPage;
