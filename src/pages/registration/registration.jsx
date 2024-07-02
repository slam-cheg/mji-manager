import React from "react";
import { Header } from "../../components/header/header";
import { H1Title } from "../../components/h1-title/h1-title";
import styles from "./index.module.css";
import { Form } from "../../components/form/form";
import { Result } from "../../components/result/result";

export const Registration = () => {
	let currentResult = "start";
	return (
		<>
			<Header />
			<main className={styles.main}>
				<H1Title>Регистрация нового аккаунта</H1Title>
				<section className={`${styles.section} ${styles.sectionGrid}`}>
					<Form />
					<Result props={{ type: currentResult }} />
				</section>
			</main>
		</>
	);
};
