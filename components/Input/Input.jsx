import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Input.module.scss"
import { forwardRef } from "react";

export const Input = forwardRef(({ value, className, disabled, onChange }, ref) => {

    const handleChange = (event) => {
        const rawValue = event.target.value;
        const cleanedValue = rawValue.replace(/[^0-9.,]/g, '');

        const dotCount = cleanedValue.split('.').length - 1;
        const commaCount = cleanedValue.split(',').length - 1;

        let formattedValue = cleanedValue.replace(/\.+/g, dotCount > 1 ? '' : '.');
        formattedValue = formattedValue.replace(/,+/g, commaCount > 0 ? '' : '.');

        onChange(formattedValue);
    };
    return (
        <div>
            <input
                name="input"
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

Input.displayName = "input";
Input.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
};