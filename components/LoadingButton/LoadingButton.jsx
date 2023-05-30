import React from 'react'
import styles from "./LoadingButton.module.scss"

export function LoadingButton() {
    return (
        <span className={styles.buttonLoading}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </span>
    )
}
