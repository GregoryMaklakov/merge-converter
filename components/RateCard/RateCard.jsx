import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./RateCard.module.scss";
import { Button } from "@components/Button";
import { useEffect, useState } from "react";
import { fetchRate } from "@api/fetchData";
import { LoadingButton } from "@components/LoadingButton";
import { useCurrency } from "@utils/useCurrency";
import { randomWait } from "@libs/helpers";

export function RateCard() {
    const { currencyFirst, currencySecond } = useCurrency();

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

    return (
        <div className={styles.rateCard}>
            <div>
                {isLoading ? (
                    <LoadingButton />
                ) : (
                    <>
                        <span>1{currencySecond}</span> =
                        <span>
                            {rate} {currencyFirst}
                        </span>
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
