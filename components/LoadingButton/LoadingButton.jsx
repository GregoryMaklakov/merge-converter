import styles from "./LoadingButton.module.scss"
import clsx from 'clsx'

export function LoadingButton({ className }) {
    return (
        <span className={clsx(styles.buttonLoading, className)}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </span>
    )
}
