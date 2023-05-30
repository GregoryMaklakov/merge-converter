import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./Input.module.scss"
import { forwardRef } from "react";
import { debounce, isNumber } from "lodash";


export const Input = forwardRef(({ value, className, disabled, onChange }, ref) => {
    const handleChange = (event) => {
        if (onChange) {
            onChange(event.target.value);
        }
    };

    return (
        <div>
            <input
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
