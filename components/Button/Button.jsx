import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon, ICON_TYPES } from "../Icon";
import styles from "./Button.module.scss";
import { forwardRef } from "react";

export const Button = forwardRef(({ icon, variant, isDisabled, onClick, className }, ref) => {
    return (
        <button
            ref={ref}
            variant={variant}
            disabled={isDisabled}
            onClick={onClick}
            className={clsx(styles.button, className, styles[`variant-${variant}`])}
        >
            <Icon name={icon} className={clsx(styles.icon, styles[`icon-${icon}`])} />
        </button>
    );
});

Button.displayName = "SwapCard";
Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(["primary", "subtle"]),
    icon: PropTypes.oneOf(Object.values(ICON_TYPES)),
    isDisabled: PropTypes.bool,
};

