"use client";

import { useState, createContext } from "react";

export const CurrencyContext = createContext();

const CurrencyProvider = ({ children }) => {
  const [fromCurrency, setFromCurrency] = useState("BTC");
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState("");
  const [toCurrency, setToCurrency] = useState("UAH");
  const [toCurrencyAmount, setToCurrencyAmount] = useState("");

  const value = {
    fromCurrency,
    setFromCurrency,
    fromCurrencyAmount,
    setFromCurrencyAmount,
    toCurrency,
    setToCurrency,
    toCurrencyAmount,
    setToCurrencyAmount,
  };
  return (
    <CurrencyContext.Provider value={value}>
      {children}
    </CurrencyContext.Provider>
  );
};

export default CurrencyProvider;
