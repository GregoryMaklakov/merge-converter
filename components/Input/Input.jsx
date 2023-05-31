import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Input.module.scss"
import { forwardRef } from "react";
import { NumericFormat } from 'react-number-format';

export const Input = forwardRef(({ value, className, disabled, onChange }, ref) => {

    const handleChange = (event) => {
        const inputValue = event.target.value;
        const numericValue = inputValue.replace(/[^0-9.]/g, "");
        if (onChange) {
            onChange(numericValue !== "" ? parseFloat(numericValue) : "");
        }
    };

    return (
        <div>
            <input
                maxLength={13}
                min={0}
                ref={ref}
                type="text"
                inputMode="decimal"
                className={clsx(styles.input, className)}
                disabled={disabled}
                value={value}
                placeholder="0.00"
                onChange={handleChange}
            />
        </div>
    );
});


Input.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
};