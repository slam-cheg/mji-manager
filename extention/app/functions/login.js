import { initLoader } from "./initLoader.js";
import { loader } from "../mji-app-scripts.js";

export const logIn = (log, pass, form, evt) => {
	console.log("Запуск авторизации");
	evt.preventDefault();

	initLoader(loader, form, true);
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		if (request.contentScriptQuery == "logIn") {
			let fio = "";
			if (request.data.loginIsPossible === true && request.data.activated) {
				if (request.data.fio) {
					fio = request.data.fio;
				} else {
					fio = randomFio();
				}
				chrome.storage.local.set({ logged: `${log}`, fio: `${fio}` }).then(() => {
					checkLogin(log, request.data.loginIsPossible, true);
					initLoader(loader, form, false);
				});
			} else {
				loginFormActivationError.classList.add("auth__error_visible");
				loginFormActivationError.textContent = request.data.activation;
				initLoader(loader, form, false);
			}
		}
	});
	if (log !== "" && pass !== "") {
		chrome.runtime.sendMessage({
			contentScriptQuery: "logIn",
			data: {
				login: log,
				password: pass,
			},
			url: `${currentIP}logIn`,
		});
	} else {
		loginFormActivationError.classList.add("auth__error_visible");
		loginFormActivationError.textContent = "Поля не могут быть пустыми";
		initLoader(loader, form, false);
	}
}