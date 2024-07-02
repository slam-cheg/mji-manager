import React from "react";
import { Fieldset } from "./fieldset/fieldset";
import styles from "./form.module.css";
import { Button } from "../button/button";

export const Form = () => {
	return (
		<form className={`${styles.form} ${styles.formDisabled} ${styles.formRegistration}`} action='submit' noValidate>
			<Fieldset props={{ type: "text", placeholder: "И. О. Фамилия", id: "fio", minLength: "4", errorType: "error-name", errorText: "Не валидное имя" }} />
			<Fieldset props={{ type: "email", placeholder: "E-mail", id: "login", minLength: "4", errorType: "error-email", errorText: "Не валидный E-mail" }} />
			<Fieldset props={{ type: "password", placeholder: "Пароль", id: "password", minLength: "8", errorType: "error-password", errorText: "Слабый пароль" }} />
			<Button props={{ id: "registration-btn", value: "Зарегистрироваться", type: "submit"}} />
		</form>
	);
};
