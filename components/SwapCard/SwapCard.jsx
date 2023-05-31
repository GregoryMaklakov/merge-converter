import PropTypes from "prop-types";
import clsx from "clsx";
import { Icon } from "@components/Icon/Icon";
import { forwardRef, useEffect, useRef, useState } from "react";
import { Input } from "@components/Input";
import styles from "./SwapCard.module.scss";
import { LoadingButton } from "@components/LoadingButton";

export const SwapCard = forwardRef(
    ({ className, onChange, isSell, convertFrom, convertTo, icon, isLoaded, value }, ref) => {

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

        const inputRef = useRef(null);
        useEffect(() => {
            if (inputRef.current) {
                inputRef.current.value;
            }
        }, []);

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
                <p className={styles.label}>{isSell ? "You Buy" : "You sell"}</p>
                <div className={styles.body}>
                    <div className={styles.item}>
                        <Icon name={icon} size={24} className={styles.icon} />
                        <span className={styles.token}>{convertFrom ?? convertTo}</span>
                    </div>
                    {isLoaded ? (
                        <LoadingButton className={styles.loader} />
                    ) : (
                        <Input
                            value={value}
                            onChange={onChange}
                            className={styles.input}
                            ref={inputRef}
                        />
                    )}
                </div>
            </div>
        );
    }
);

SwapCard.displayName = "SwapCard";
SwapCard.propTypes = {
    icon: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func,
    label: PropTypes.string,
    isSell: PropTypes.bool,
    value: PropTypes.string,
    isLoaded: PropTypes.bool,
    convertFrom: PropTypes.string,
    convertTo: PropTypes.string,
};
