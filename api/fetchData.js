import { axios } from "../libs/axios";

export const fetchRate = async () => {
  try {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=uah"
    );
    const rate = data.bitcoin.uah;
    return rate;
  } catch (error) {
    throw new Error("Error" + error.message);
  }
};
export const fetchSymbols = async () => {};
