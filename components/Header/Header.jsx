import Link from "next/link"
import { Icon } from "@components/Icon/Icon"
import clsx from "clsx"
import styles from "./Header.module.scss"


export function Header({ className }) {
    return (
        <div className={clsx(className, styles.header)}>
            <Link href='/'>
                <Icon name="logo" color="red" className={styles.logo} />
            </Link>
        </div>
    )
}
