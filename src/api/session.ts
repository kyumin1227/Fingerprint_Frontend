import { back } from ".";

export const getSessions = async (stdNum: String) => {
  const res = await back.get("/sessions", {
    params: {
      stdNum,
    },
  });
  return res.data;
};

export const sendApply = async (date: string, studentNum: string, sign: boolean, credential: string, role: string) => {
  const res = await back.post(`/sessions/${date.replace("-", "").replace("-", "")}`, {
    studentNum,
    sign,
    credential,
    role,
  });
  return res.data;
};

/**
 * 유저 리스트 가져오는 api
 * @param date
 * @returns
 */
export const getUserList = async (date: string) => {
  const res = await back.get(`/sessions/userList?date=${date}`);

  return res.data;
};
