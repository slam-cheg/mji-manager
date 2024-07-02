import React from "react";
import styles from "./fieldset.module.css"

export const Fieldset = ({props}) => {
	return (
		<fieldset className={styles.formInputWrapper}>
			<input type={props.type} className={styles.formInput} placeholder={props.placeholder} id={props.id} minLength={props.minLength} required />
			<span className={`${styles.formError} ${styles.formErrorHidden}`} id={props.errorType}>
				{props.errorText}
			</span>
		</fieldset>
	);
};
