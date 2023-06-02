import Link from "next/link"
import clsx from "clsx"
import { Icon } from "../Icon"
import styles from "./Header.module.scss"


export function Header({ className }) {
    return (
        <div className={clsx(className, styles.header)}>
            <Link href='/' aria-label="Logo Merge">
                <Icon name="logo" color="red" className={styles.logo} />
            </Link>
        </div>
    )
}
