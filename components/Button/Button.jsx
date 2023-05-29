import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon, ICON_TYPES } from "@components/Icon/Icon";
import styles from "./Button.module.scss";

export function Button({ icon, variant, isDisabled, onClick, className, }) {
    return (
        <button
            variant={variant}
            disabled={isDisabled}
            onClick={onClick}
            className={clsx(styles.button, className, styles[`variant-${variant}`])}
        >
            <Icon name={icon} className={clsx(styles.icon, styles[`icon-${icon}`])} />
        </button>
    );
}

Button.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.oneOf(["primary", "subtle"]),
    icon: PropTypes.oneOf(Object.values(ICON_TYPES)),
    isDisabled: PropTypes.bool,
};

