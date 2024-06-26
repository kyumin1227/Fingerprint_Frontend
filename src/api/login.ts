import axios from "axios";
import { back } from ".";
import qs from "qs";

// 구글 로그인 요청
export const googleLogin = async (credential: string) => {
  const res = await back.post("/login", {
    credential,
  });
  return res.data;
};

// 회원가입 요청
export const googleRegister = async (
  credential: string,
  email: string,
  name: string,
  kakao: string,
  studentNum: string
) => {
  const res = await back.post("/register", {
    credential,
    email,
    name,
    kakao,
    studentNum,
  });
  return res.data;
};

/**
 * 구글 로그인 토큰 요청
 * @param code
 * @param client_id
 * @param client_secret
 * @param redirect_uri
 * @param grant_type
 * @returns
 */
export const googleGetToken = async (
  code: string,
  client_id: string,
  client_secret: string,
  redirect_uri: string,
  grant_type: string
) => {
  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  };

  try {
    const res = await axios.post(
      "https://oauth2.googleapis.com/token",
      qs.stringify({
        code,
        client_id,
        client_secret,
        redirect_uri,
        grant_type,
      }),
      config
    );

    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/**
 * 카카오톡 토큰 백엔드로 전송
 * @param redirect_uri
 * @param code
 */
export const kakaoSendToken = async (redirect_uri: string, code: string, studentNumber: string) => {
  const res = await back.post("/kakao", { redirect_uri, code, studentNumber });
  return res.data;
};
