import React from "react";
import styles from "./result.module.css";

export const Result = ({ props }) => {
	console.log(props.type);
	if (props.type === "start") {
		return (
			<div className={`${styles.result} resultStart`}>
				<h2 className={styles.h2Title}>Введите регистрационные данные</h2>
				<div className={styles.resultTextWrapper}>
					<p>ФИО в формате "И. О. Фамилия"</p>
					<p>Рабочая почта</p>
					<p>Пароль длиной не менее 8 символов, только английскими буквами, обязательно наличие больших и маленьких букв, цифр и спец. символов</p>
					<br />
					<a href='../login' className={styles.headerText}>
						Есть аккаунт?
					</a>
				</div>
			</div>
		);
	}
	if (props.type === "success") {
		return (
			<div className={`${styles.result} ${styles.resultSuccess}`}>
				<h2 className={styles.h2Title}>Регистрация прошла успешно!</h2>
				<div className={styles.resultTextWrapper}>
					<p>
						Ваш ключ активации: <span className='result__key'></span>
					</p>
					<p>Внимание! Ключ генерируется только 1&nbsp;раз! Сохраните его в&nbsp;надежное место.</p>
				</div>
			</div>
		);
	}
	if (props.type === "fail") {
		return (
			<div className={`${styles.result} ${styles.resultFail}`}>
				<h2 className={styles.h2Title}>Ошибка регистрации</h2>
				<div className={styles.resultTextWrapper}>
					<p>Попробуйте перезагрузить страницу</p>
				</div>
			</div>
		);
	}
};
