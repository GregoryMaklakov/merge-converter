"use client";

import { useCurrency } from '@utils/useCurrency';
import { fetchRate } from '@api/fetchData';
import { useEffect, useState } from 'react';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { isNumber, replace, round } from 'lodash';
import { SwapCard } from '@components/SwapCard';
import styles from "./ConverterForm.module.scss";

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

    useEffect(() => {
        fetchRate()
            .then((rate) => setRate(rate))
            .catch((error) => console.error("Error", error));
    }, []);

    const handleInputChange = (event) => {
        let inputValue = replace(event.target.value, /[^0-9.,-]/g, ''); // Удаляем все символы, кроме цифр, точки, запятой и знака минуса
        inputValue = replace(inputValue, ',', '.'); // Заменяем запятую на точку для правильного формата числа

        if (isNumber(inputValue)) {
            const roundedValue = round(parseFloat(inputValue), 2); // Округляем число до двух знаков после запятой
            setAmount(roundedValue.toLocaleString()); // Форматируем число с использованием локального формата (например, 11,969.02)
        } else {
            setAmount('');
        }
    };

    const handleSwap = () => {
        setCurrencyFirst(currencySecond);
        setCurrencySecond(currencyFirst);
    };

    return (
        <div className={styles.form}>
            <SwapCard label="You sell" />
            <SwapCard label="You Buy" />

            <Button variant='primary' icon="swap" onClick={handleSwap} />
            <p>Курс BTC-UAH: {rate}</p>
        </div>
    )
}
