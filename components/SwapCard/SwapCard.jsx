import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon } from "@components/Icon/Icon";
import { useState } from "react";
import { Input } from "@components/Input";
import { useCurrency } from "@utils/useCurrency";
import styles from "./SwapCard.module.scss";

export function SwapCard({ className, onChange, label }) {
    const {
        amount,
        currencyFirst,
        currencySecond,
        setAmount,
        setCurrencyFirst,
        setCurrencySecond
    } = useCurrency();
    const [rate, setRate] = useState(0);
    return (
        <div className={clsx(styles.container, className)}>
            <p className={styles.label}>{label}</p>
            <div className={styles.body}>
                <div className={styles.item}>
                    <Icon name="bitcoin" size={24} className={styles.iconBtc} />
                    <span>{currencySecond}</span>
                </div>
                <Input value={amount} onChange={onChange} className={styles.input} />
            </div>
        </div>
    )
}
