import { initLoader } from "./initLoader.js";
import { loader, accountFio, loggedLogin } from "../mji-app-scripts.js";
import { checkLayoutBeforeInit } from "./checkLayout.js";
import { changePopupState } from "./changePopupState.js";

export const checkLogin = (log, loginIsPossible, launchStatus) => {
	console.log("Запуск проверки логина");
	initLoader(loader, loginForm, true);
	let currentLogin = "";
	let currentFio = "";
	chrome.storage.local.get(["fio"]).then((result) => {
		if (result.fio !== undefined) {
			accountFio.value = result.fio;
			currentFio = result.fio;
            initLoader(loader, loginForm, false);
		}
	});
	chrome.storage.local.get(["logged"]).then((result) => {
		if (result.logged !== undefined) {
			if (log !== undefined && log !== result.logged) {
				loggedLogin.textContent = log;
				currentLogin = log;
			} else {
				loggedLogin.textContent = result.logged;
				currentLogin = result.logged;
			}
			changePopupState("logged");
			checkLayoutBeforeInit();
			initialization(currentFio, currentLogin, loginIsPossible, launchStatus);
		}
	});
}