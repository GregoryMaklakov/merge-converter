import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon } from "@components/Icon/Icon";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Input } from "@components/Input";
import { useCurrency } from "@utils/useCurrency";
import styles from "./SwapCard.module.scss";

export const SwapCard = forwardRef(({ className, onChange, label }, ref) => {
    const {
        amount,
        currencyFirst,
        currencySecond,
        setAmount,
        setCurrencyFirst,
        setCurrencySecond
    } = useCurrency();

    const handleInputChange = (value) => {
        setAmount(value);
        if (onChange) {
            onChange(value);
        }
    };

    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = amount;
        }
    }, [amount]);
    const handleClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    return (
        <div className={clsx(styles.container, className)} onClick={handleClick} ref={ref}>
            <p className={styles.label}>{label}</p>
            <div className={styles.body}>
                <div className={styles.item}>
                    <Icon name="bitcoin" size={24} className={styles.iconBtc} />
                    <span>{currencySecond}</span>
                </div>
                <Input value={amount} onChange={handleInputChange} className={styles.input} ref={inputRef} />
            </div>
        </div>
    );
});

SwapCard.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
};
