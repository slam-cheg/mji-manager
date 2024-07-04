import React from "react";
import styles from "./fieldset.module.css";

export const Fieldset = ({ props }) => {
	return (
		<fieldset className={styles.formInputWrapper}>
			<input type={props.type} className={styles.formInput} placeholder={props.placeholder} id={props.id} minLength={props.minLength} required onChange={props.validate}/>
			{props.error ? (
				<span className={styles.formError} id={props.errorType}>
					{props.errorText}
				</span>
			) : (
				""
			)}
		</fieldset>
	);
};
