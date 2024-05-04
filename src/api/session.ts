import { back } from ".";

export const getSessions = async (stdNum: String) => {
  const res = await back.get("/sessions", {
    params: {
      stdNum,
    },
  });
  return res.data;
};
