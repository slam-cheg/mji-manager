import React from "react";
import styles from "./h1-title.module.css";

export const H1Title = (props) => {
	return <h1 className={`${styles.h1Title} ${styles.h1TitleCenter}`}>{props.children}</h1>;
};
