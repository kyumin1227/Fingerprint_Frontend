import { back } from ".";

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
