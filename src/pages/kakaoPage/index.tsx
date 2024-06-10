import { Grid, Typography } from "@mui/material";

const Kakao = () => {
  const Rest_api_key = import.meta.env.VITE_KAKAO_REST_API_KEY; //REST API KEY
  const redirect_uri = import.meta.env.VITE_KAKAO_REDIRECT_URI; //Redirect URI
  // oauth 요청 URL
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code&scope=talk_message,friends,profile_nickname`;

  const handleKakao = () => {
    window.location.href = kakaoURL;
  };

  return (
    <Grid>
      <Grid display={"flex"} alignItems={"center"} marginBottom="20%" justifyContent={"center"}>
        <img src="./logo2/logo2_bg_remove.png" alt="" width="100px" />
        <Typography color={"white"} variant="h3" style={{ fontFamily: "Madimi One" }} marginLeft="15px">
          GSC - FP
        </Typography>
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"column"}
        alignItems={"center"}
        marginBottom="15%"
      >
        <Typography color={"white"} variant="h6">
          카카오톡 메시지 전달을 위해
        </Typography>
        <Typography color={"white"} variant="h6">
          카카오톡 로그인 및 동의가 필요합니다.
        </Typography>
        <Typography color={"white"} variant="h6">
          선택 항목까지 모두 동의 부탁드립니다.
        </Typography>
      </Grid>
      <Grid display={"flex"} justifyContent={"center"} marginBottom="30%">
        <img src="./kakao/kakao_login_medium_narrow.png" alt="" width="200px" onClick={handleKakao} />
      </Grid>
    </Grid>
  );
};

export default Kakao;
