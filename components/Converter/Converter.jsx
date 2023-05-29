"use client";

import { Icon } from '@components/Icon/Icon';
import { useCurrency } from '@utils/useCurrency';
import { fetchRates } from '@api/fetchData';
import { useEffect, useState } from 'react';
import { Button } from '@components/Button';


export function Converter() {
    const { amount, currencyOne, currencyTwo } = useCurrency()

    const [rate, setRate] = useState(0);

    useEffect(() => {
        fetchRates()
            .then((rate) => setRate(rate))
            .catch((error) => console.error("Error", error));
    }, []);

    return (
        <>
            <p>{amount}</p>
            <p>{currencyOne}</p>
            <p>{currencyTwo}</p>
            <Icon name="swap" size={24} />
            <p>Курс BTC-UAH: {rate}</p>
            <Button variant='primary' icon='swap' onClick={() => console.log(hello)} />
        </>
    )
}
