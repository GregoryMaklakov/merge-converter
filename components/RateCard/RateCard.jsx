import clsx from "clsx";
import PropTypes from "prop-types";
import styles from "./RateCard.module.scss";
import { Button } from "@components/Button";
import { LoadingButton } from "@components/LoadingButton";

export function RateCard({ isLoaded, rate, onClick, className, fromCurrency, toCurrency }) {
    return (
        <div className={clsx(styles.rateCard, className)}>
            <div>
                {isLoaded ? (
                    <LoadingButton />
                ) : (
                    <>
                        <div className={styles.amount}>
                            <span>1 {fromCurrency}</span>
                            <span className={styles.equal}>=</span>
                            <span>
                                {rate} {toCurrency}
                            </span>
                        </div>
                    </>
                )}
            </div>
            <Button
                variant="subtle"
                icon="refresh"
                onClick={onClick}
                disabled={isLoaded}
            />
        </div>
    );
}

RateCard.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    isLoaded: PropTypes.bool,
    base: PropTypes.string,
    toCurrency: PropTypes.string,
    fromCurrency: PropTypes.string,
}