import Axios from "axios";

// todo - Для того, щоб налаштувати вибір інших валют в майбутньому
export const axios = Axios.create({
  // baseUrl: "https://api.coingecko.com/api/v3/simple/price",
});
