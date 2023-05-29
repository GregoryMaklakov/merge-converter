import { useState } from "react";

export const useCurrency = () => {
  const [amount, setAmount] = useState("");
  const [currencyFirst, setCurrencyFirst] = useState("UAH");
  const [currencySecond, setCurrencySecond] = useState("BTC");

  return {
    amount,
    currencyFirst,
    currencySecond,
    setAmount,
    setCurrencyFirst,
    setCurrencySecond,
  };
};
