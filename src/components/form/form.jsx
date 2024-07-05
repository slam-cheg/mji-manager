import React, { useState } from "react";
import styles from "./form.module.css";
import { checkFio, checkEmail, checkPassword } from "../../utils/validation";
import cn from "../../utils/classNames";

const Error = ({ props }) => {
	if (props.state) {
		return (
			<span className={styles.formError} id={props.id}>
				{props.text}
			</span>
		);
	}
};

export const Form = () => {
	const [fioError, setFioError] = useState(false);
	const [loginError, setLoginError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [, updateState] = React.useState();
	const forceUpdate = React.useCallback(() => updateState({}), []);

	const handlerSubmit = (evt) => {
		evt.preventDefault();
		if (fioError || loginError || passwordError) {
			return;
		}
		const inputs = evt.currentTarget.querySelectorAll("input");
		const formData = new FormData();
		for (const input of inputs) {
			if (input.type !== "submit") {
				formData.append(input.id, input.value);
			}
		}

		console.log(...formData);
	};

	const validation = (input) => {
		if (input.type === "text") {
			const fioResult = checkFio(input);
			if (fioResult) {
				setFioError(false);
				input.value = fioResult;
			} else {
				setFioError(true);
			}
		}
		if (input.type === "email") {
			const emailResult = checkEmail(input);
			if (emailResult) {
				setLoginError(false);
			} else {
				setLoginError(true);
			}
		}
		if (input.type === "password") {
			const passwordResult = checkPassword(input);
			if (passwordResult) {
				setPasswordError(false);
			} else {
				setPasswordError(true);
			}
		}

		console.log(fioError, loginError, passwordError);

		checkButton([fioError, loginError, passwordError]);
	};

	const checkButton = (array) => {
		const result = array.find((boolean) => {
			return boolean === true;
		});

		result ? setButtonDisabled(true) : setButtonDisabled(false);
		forceUpdate();
	};

	return (
		<form className={cn([styles.form, styles.formRegistration])} noValidate onSubmit={handlerSubmit}>
			<fieldset className={styles.formInputWrapper}>
				<input
					type='text'
					className={styles.formInput}
					placeholder='И. О. Фамилия'
					id='fio'
					minLength='4'
					required
					onChange={(evt) => {
						validation(evt.currentTarget);
					}}
				/>
				<Error props={{ state: fioError, id: "fio", text: "Не валидное имя" }} />
			</fieldset>
			<fieldset className={styles.formInputWrapper}>
				<input
					type='email'
					className={styles.formInput}
					placeholder='Рабочая почта'
					id='login'
					required
					onChange={(evt) => {
						validation(evt.currentTarget);
					}}
				/>
				<Error props={{ state: loginError, id: "login", text: "Не валидный E-mail" }} />
			</fieldset>
			<fieldset className={styles.formInputWrapper}>
				<input
					type='password'
					className={styles.formInput}
					placeholder='Пароль'
					id='password'
					minLength='8'
					required
					onChange={(evt) => {
						validation(evt.currentTarget);
					}}
				/>
				<Error props={{ state: passwordError, id: "password", text: "Слабый пароль" }} />
			</fieldset>

			{buttonDisabled ? <input type='submit' className={cn([styles.button, styles.buttonForm, styles.buttonDisabled])} id='registration-btn' value='Зарегистрироваться' /> : <input type='submit' className={cn([styles.button, styles.buttonForm])} id='registration-btn' value='Зарегистрироваться' />}
		</form>
	);
};
