import axios from "axios";

export const getAll = async (url) => {
  const res = await axios.get(url);
  return res;
};
