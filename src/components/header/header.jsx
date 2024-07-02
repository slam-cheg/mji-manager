import React from "react";
import styles from "./header.module.css";
import { Logo } from "../logo/logo";

export const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerLeft}>
				<Logo props={{className: "logo"}}/>
			</div>
			<div className={styles.headerRight}>
				<a href='https://github.com/eternumart/Chrome-App/archive/refs/heads/dev.zip' target='_blank' rel='noopener noreferrer' className={styles.headerText}>
					Скачать расширение
				</a>
			</div>
		</header>
	);
};
