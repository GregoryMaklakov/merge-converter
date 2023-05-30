"use client";

import { useCurrency } from '@utils/useCurrency';
import { useState } from 'react';
import { Button } from '@components/Button';
import { SwapCard } from '@components/SwapCard';
import styles from "./ConverterForm.module.scss";
import { RateCard } from '@components/RateCard';

export function ConverterForm() {
    const {
        amount,
        currencyFirst,
        currencySecond,
        setAmount,
        setCurrencyFirst,
        setCurrencySecond
    } = useCurrency();
    const [rate, setRate] = useState(0);

    const handleSwap = () => {
        setCurrencyFirst(currencySecond);
        setCurrencySecond(currencyFirst);
    };

    return (
        <form className={styles.form}>
            <SwapCard label="You sell" />
            <SwapCard label="You Buy" />

            <Button variant='primary' icon="swap" onClick={handleSwap} className={styles.Button} />
            <RateCard />
        </form>
    )
}
