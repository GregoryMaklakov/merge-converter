import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./Input.module.scss";

export function Input({ value, className, onChange, disabled }) {

    return (
        <div>
            <input
                type="text"
                inputMode="decimal"
                className={clsx(styles.input, className)}
                disabled={disabled}
                value={value}
                placeholder="0.00"
                onChange={onChange}
            />
        </div>
    );
}

Input.propTypes = {
    value: PropTypes.string,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    onChange: PropTypes.func,
};
