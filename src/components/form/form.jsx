import React, { useState } from "react";
//import { Fieldset } from "./fieldset/fieldset";
import styles from "./form.module.css";
//import { Button } from "../button/button";
import { checkFio, checkEmail, checkPassword } from "../../utils/validation";

export const Form = () => {
	const Fieldset = ({ props }) => {
		const [error, setError] = useState(false);

		const validate = (inputEvent) => {
			switch (inputEvent.currentTarget.type) {
				case "text": {
					const result = checkFio(inputEvent.currentTarget);
					if (result !== false) {
						inputEvent.currentTarget.value = result;
						setError(false);
					} else {
						setError(true);
					}
					break;
				}
				case "email": {
					const result = checkEmail(inputEvent.currentTarget);
					result !== false ? setError(false) : setError(true);
					break;
				}
				case "password": {
					const result = checkPassword(inputEvent.currentTarget);
					result !== false ? setError(false) : setError(true);
					break;
				}
				default: {
					break;
				}
			}
		};

		return (
			<fieldset className={styles.formInputWrapper}>
				<input type={props.type} className={styles.formInput} placeholder={props.placeholder} id={props.id} minLength={props.minLength} required onChange={validate} />
				{error ? (
					<span className={styles.formError} id={props.errorType}>
						{props.errorText}
					</span>
				) : (
					""
				)}
			</fieldset>
		);
	};

	const Button = ({ props }) => {
		const [buttonDisabled, setButtonDisabled] = useState(true);

		let style;
		buttonDisabled ? (style = { background: "rgba(0, 0, 0, 0.5)", pointerEvents: "none" }) : (style = null);
		return <input className={`${styles.button} ${styles.buttonForm}`} style={style} id={props.id} value={props.value} type={props.type} />;
	};

	return (
		<form className={`${styles.form} ${styles.formRegistration}`} method='post' onSubmit={console.log("submit")} noValidate>
			<Fieldset
				props={{
					type: "text",
					placeholder: "И. О. Фамилия",
					id: "fio",
					minLength: "4",
					errorType: "error-name",
					errorText: "Не валидное имя",
				}}
			/>
			<Fieldset props={{ type: "email", placeholder: "E-mail", id: "login", minLength: "4", errorType: "error-email", errorText: "Не валидный E-mail" }} />
			<Fieldset props={{ type: "password", placeholder: "Пароль", id: "password", minLength: "8", errorType: "error-password", errorText: "Слабый пароль" }} />
			<Button props={{ id: "registration-btn", value: "Зарегистрироваться", type: "submit" }} />
		</form>
	);
};
