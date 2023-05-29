"use client";

import { useCurrency } from '@utils/useCurrency';

export function Converter() {
    const { amount, currencyOne, currencyTwo } = useCurrency()
    return (
        <>
            <p>{amount}</p>
            <p>{currencyOne}</p>
            <p>{currencyTwo}</p>
        </>
    )
}
