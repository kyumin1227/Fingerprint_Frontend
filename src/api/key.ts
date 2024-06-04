import { back } from ".";

export const getKeyInfo = async (date: String) => {
  const res = await back.get(`/key/${date}`);
  return res.data;
};
