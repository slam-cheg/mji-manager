import React from "react";
import logo from "../../images/logo.svg";
import styles from "./logo.module.css"

export const Logo = () => {
	return (
		<>
			<img src={logo} alt='' className={styles.logo} />
		</>
	);
};
