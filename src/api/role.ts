import { back } from ".";

export const changeRole = async (credential: string, studentNum: string, role: string, roleCode: string) => {
  try {
    const res = await back.post("/role", {
      credential,
      studentNum,
      role,
      roleCode,
    });

    return res.data;
  } catch {
    return { success: false, message: "서버가 응답하지 않습니다.", data: null };
  }
};
