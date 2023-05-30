import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon } from "@components/Icon/Icon";
import { forwardRef, useContext, useEffect, useRef, useState } from "react";
import { Input } from "@components/Input";
import styles from "./SwapCard.module.scss";
import numeral from 'numeral';
import { CurrencyContext } from "@utils/CurrencyContext";

export const SwapCard = forwardRef(({ className, onChange, label }, ref) => {

    const {
        fromCurrency,
        toCurrency,
        setFromCurrency,
        setToCurrency,
        firstAmount,
        setFirstAmount,
    } = useContext(CurrencyContext)

    const [isActive, setIsActive] = useState(false);
    const handleClickContainer = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
        setIsActive(true);
    };
    const handleContainerFocus = () => {
        setIsActive(true);
    };
    const handleContainerBlur = () => {
        setIsActive(false);
    };

    //
    const handleInputChange = (value) => {
        const numericValue = numeral(value).value();
        setAmount(numericValue !== null ? numeral(numericValue).format("0,0.00") : "");
        if (onChange) {
            onChange(numericValue !== null ? numeral(numericValue).format("0,0.00") : "");
        }
    };
    //

    const inputRef = useRef(null);
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = fromCurrency;
        }
    }, [fromCurrency]);

    return (
        <div
            className={clsx(
                styles.container,
                { [styles.active]: isActive },
                className
            )}
            onClick={handleClickContainer}
            onFocus={handleContainerFocus}
            onBlur={handleContainerBlur}
            ref={ref}
        >
            <p className={styles.label}>{label}</p>
            <div className={styles.body}>
                <div className={styles.item}>
                    <Icon
                        name="flag"
                        size={24}
                        className={styles.icon}
                    />
                    <span className={styles.token}>{fromCurrency}</span>
                </div>
                <Input
                    value={firstAmount}
                    onChange={handleInputChange}
                    className={styles.input}
                    ref={inputRef}
                />
            </div>
        </div>
    );
});

SwapCard.propTypes = {
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
};
