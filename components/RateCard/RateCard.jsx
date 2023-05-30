// import clsx from "clsx";
// import PropTypes from "prop-types";
import styles from "./RateCard.module.scss";
import { Button } from "@components/Button";
import { useContext, useEffect, useState } from "react";
import { fetchRate } from "@api/fetchData";
import { LoadingButton } from "@components/LoadingButton";
import { CurrencyContext, } from "@utils/CurrencyContext";
import { randomWait } from "@libs/helpers";
import numeral from 'numeral';

export function RateCard() {
    const {
        fromCurrency,
        toCurrency,
        setFromCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount,
    } = useContext(CurrencyContext)

    const [rate, setRate] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

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

    const handleRefreshClick = async (event) => {
        event.preventDefault();
        await loadData();
    };

    const reverseRate = 1 / rate;
    const formattedReverseRate = reverseRate.toFixed(7)

    return (
        <div className={styles.rateCard}>
            <div>
                {isLoading ? (
                    <LoadingButton />
                ) : (
                    <>
                        <div className={styles.amount}>
                            <span>1 {fromCurrency}</span>
                            <span className={styles.equal}>=</span>
                            <span>
                                {numeral(rate).format("0,0.00")} {toCurrency}
                            </span>
                        </div>
                        <div className={styles.amount}>
                            <span>1 {toCurrency}</span>
                            <span className={styles.equal}>=</span>
                            <span>
                                {numeral(formattedReverseRate).format("0,0.0000000")} {fromCurrency}
                            </span>
                        </div>
                    </>
                )}
            </div>
            <Button
                variant="subtle"
                icon="refresh"
                onClick={handleRefreshClick}
                disabled={isLoading}
            />
        </div>
    );
}
