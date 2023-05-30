"use client";

import { useState } from "react";
import { Button } from "@components/Button";
import { SwapCard } from "@components/SwapCard";
import styles from "./ConverterForm.module.scss";
import { RateCard } from "@components/RateCard";

export function ConverterForm({ onClick }) {

    return (
        <form className={styles.form}>
            <div className={styles.swapCards}>
                <SwapCard label="You sell" />
                <SwapCard label="You Buy" />
                <Button
                    variant="primary"
                    icon="swap"
                    onClick={() => console.log("hello")}
                    className={styles.button}
                />
            </div>
            <RateCard />
        </form>
    );
}
