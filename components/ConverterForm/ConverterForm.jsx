import { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "../Button";
import { SwapCard } from "../SwapCard";
import { RateCard } from "../RateCard";
import { fetchRate } from "../../api/fetchData";
import { randomWait } from "../../libs/helpers";

import numeral from "numeral";
import styles from "./ConverterForm.module.scss";

export function ConverterForm() {
    const [rate, setRate] = useState(0);
    const [isLoaded, setIsLoading] = useState(true);
    const [swapClicked, setSwapClicked] = useState(false);
    const [currencyIcons, setCurrencyIcons] = useState({
        fromCurrencyIcon: "bitcoin",
        toCurrencyIcon: "flag",
    });
    const [fromCurrency, setFromCurrency] = useState("BTC");
    const [fromCurrencyAmount, setFromCurrencyAmount] = useState("");
    const [toCurrency, setToCurrency] = useState("UAH");
    const [toCurrencyAmount, setToCurrencyAmount] = useState("");

    useEffect(() => {
        setCurrencyIcons({
            fromCurrencyIcon: swapClicked ? "flag" : "bitcoin",
            toCurrencyIcon: swapClicked ? "bitcoin" : "flag",
        });
    }, [swapClicked]);

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setIsLoading(true);
        try {
            await randomWait();
            const fetchedRate = await fetchRate();
            setRate(fetchedRate);
        } catch (error) {
            console.error("Error", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleRefreshClick = useCallback(async (event) => {
        event.preventDefault();
        await loadData();
    }, []);

    const handleSwap = useCallback(
        (event) => {
            event.preventDefault();
            setFromCurrency(toCurrency);
            setToCurrency(fromCurrency);
            setFromCurrencyAmount(toCurrencyAmount);
            setToCurrencyAmount(fromCurrencyAmount);
            setSwapClicked(!swapClicked);
        },
        [
            fromCurrency,
            toCurrency,
            fromCurrencyAmount,
            toCurrencyAmount,
            swapClicked,
        ]
    );

    const [fromCurrencyLoading, setFromCurrencyLoading] = useState(false);
    const [toCurrencyLoading, setToCurrencyLoading] = useState(false);

    const handleFromCurrencyInput = useCallback(async (value) => {
        setFromCurrencyAmount(value);
        setToCurrencyLoading(true);
        await randomWait();
        setToCurrencyLoading(false);
    }, []);

    const handleToCurrencyInput = useCallback(async (value) => {
        setToCurrencyAmount(value);
        setFromCurrencyLoading(true);
        await randomWait();
        setFromCurrencyLoading(false);
    }, []);

    const calculateConvertedAmount = (
        baseAmount,
        fromCurrency,
        toCurrency,
        rate
    ) => {
        const convertedAmount = parseFloat(baseAmount);
        if (isNaN(convertedAmount)) {
            return "";
        }
        if (fromCurrency === "BTC" && toCurrency === "UAH") {
            return convertedAmount * rate;
        } else if (fromCurrency === "UAH" && toCurrency === "BTC") {
            return convertedAmount / rate;
        }
        return "";
    };

    const calculateBaseAmount = (
        convertedAmount,
        fromCurrency,
        toCurrency,
        rate
    ) => {
        const baseAmount = parseFloat(convertedAmount);
        if (isNaN(baseAmount)) {
            return "";
        }
        if (fromCurrency === "BTC" && toCurrency === "UAH") {
            return baseAmount / rate;
        } else if (fromCurrency === "UAH" && toCurrency === "BTC") {
            return baseAmount * rate;
        }
        return "";
    };

    useEffect(() => {
        const convertedAmount = calculateConvertedAmount(
            fromCurrencyAmount,
            fromCurrency,
            toCurrency,
            rate
        );
        setToCurrencyAmount(convertedAmount);
    }, [fromCurrencyAmount, fromCurrency, toCurrency, rate, setToCurrencyAmount]);

    useEffect(() => {
        const baseAmount = calculateBaseAmount(
            toCurrencyAmount,
            fromCurrency,
            toCurrency,
            rate
        );
        setFromCurrencyAmount(baseAmount);
    }, [toCurrencyAmount, fromCurrency, toCurrency, rate, setFromCurrencyAmount]);

    const reverseRate = (1 / rate).toFixed(7);

    //Animation

    //========================================================================================================================================================

    return (
        <form className={styles.form}>
            <div className={styles.swapCards}>
                <SwapCard
                    value={fromCurrencyAmount}
                    onChange={handleFromCurrencyInput}
                    label="You Sell"
                    icon={currencyIcons.fromCurrencyIcon}
                    convertFrom={fromCurrency}
                    fromCurrency={fromCurrency}
                    isLoaded={fromCurrencyLoading}
                />
                <SwapCard
                    value={toCurrencyAmount}
                    onChange={handleToCurrencyInput}
                    label="You Buy"
                    icon={currencyIcons.toCurrencyIcon}
                    convertFrom={toCurrency}
                    fromCurrency={fromCurrency}
                    isLoaded={toCurrencyLoading}
                />
                <Button
                    variant="primary"
                    icon="swap"
                    onClick={handleSwap}
                    className={styles.button}
                />
            </div>
            <RateCard
                onClick={handleRefreshClick}
                isLoaded={isLoaded}
                fromCurrency={fromCurrency}
                toCurrency={toCurrency}
                rate={
                    swapClicked
                        ? numeral(reverseRate).format("0,0.0000000")
                        : numeral(rate).format("0,0.00")
                }
            />
        </form>
    );
}
