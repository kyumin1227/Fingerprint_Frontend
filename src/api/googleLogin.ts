import { back } from ".";

export const googleLogin = async (credential: string) => {
  const res = await back.post("/login", credential);
  return res.data;
};
