import { useState } from "react";

export const useCurrency = () => {
  const [amount, setAmount] = useState(25);
  const [currencyOne, setCurrencyOne] = useState("UAH");
  const [currencyTwo, setCurrencyTwo] = useState("BTC");

  return { amount, currencyOne, currencyTwo };
};
