// import { motion } from 'framer-motion';
import { useState, useEffect, useMemo, useCallback } from "react";
import { Button } from "@components/Button";
import { SwapCard } from "@components/SwapCard";
import styles from "./ConverterForm.module.scss";
import { RateCard } from "@components/RateCard";
import numeral from "numeral";
import { fetchRate } from "@api/fetchData";
import { randomWait } from "@libs/helpers";


export function ConverterForm() {
    const [rate, setRate] = useState(0);
    const [isLoaded, setIsLoading] = useState(true);
    const [swapClicked, setSwapClicked] = useState(false);
    const [isSell] = useState(true);
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
            setFromCurrency,
            toCurrency,
            setToCurrency,
            fromCurrencyAmount,
            setFromCurrencyAmount,
            toCurrencyAmount,
            setToCurrencyAmount,
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
    function calculateConvertedAmount(baseAmount, fromCurrency, toCurrency, rate) {
        const convertedAmount = parseFloat(baseAmount);
        if (isNaN(convertedAmount)) {
            return "";
        }
        if (fromCurrency === "BTC" && toCurrency === "UAH") {
            return (convertedAmount * rate).toString();
        } else if (fromCurrency === "UAH" && toCurrency === "BTC") {
            return (convertedAmount / rate).toString();
        }
        return "";
    }

    function calculateBaseAmount(convertedAmount, fromCurrency, toCurrency, rate) {
        const baseAmount = parseFloat(convertedAmount);
        if (isNaN(baseAmount)) {
            return "";
        }
        if (fromCurrency === "BTC" && toCurrency === "UAH") {
            return (baseAmount / rate).toString();
        } else if (fromCurrency === "UAH" && toCurrency === "BTC") {
            return (baseAmount * rate).toString();
        }
        return "";
    }

    useEffect(() => {
        const convertedAmount = calculateConvertedAmount(fromCurrencyAmount, fromCurrency, toCurrency, rate);
        setToCurrencyAmount(convertedAmount);
    }, [fromCurrencyAmount, fromCurrency, toCurrency, rate, setToCurrencyAmount]);

    useEffect(() => {
        const baseAmount = calculateBaseAmount(toCurrencyAmount, fromCurrency, toCurrency, rate);
        setFromCurrencyAmount(baseAmount);
    }, [toCurrencyAmount, fromCurrency, toCurrency, rate, setFromCurrencyAmount]);

    const reverseRate = useMemo(() => (1 / rate).toFixed(7), [rate]);


    //Animation
    // const MotionButton = motion(Button)
    //========================================================================================================================================================


    return (
        <form className={styles.form}>
            <div className={styles.swapCards}>
                <SwapCard
                    value={fromCurrencyAmount.toString()}
                    onChange={handleFromCurrencyInput}
                    isSell={isSell}
                    icon={currencyIcons.fromCurrencyIcon}
                    convertFrom={fromCurrency}
                    fromCurrency={fromCurrency}
                    isLoaded={fromCurrencyLoading}
                />
                <SwapCard
                    value={toCurrencyAmount.toString()}
                    onChange={handleToCurrencyInput}
                    isSell={!isSell}
                    icon={currencyIcons.toCurrencyIcon}
                    convertFrom={toCurrency}
                    fromCurrency={fromCurrency}
                    isLoaded={toCurrencyLoading}
                />
                <Button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
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
