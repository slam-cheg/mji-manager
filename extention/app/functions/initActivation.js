import { initLoader } from "./initLoader.js";
import { loader } from "../mji-app-scripts.js";
import { checkLogin } from "./checkLogin.js";
import { currentIP, activateFormKey, activateFormKeyError } from "../mji-app-scripts.js";

export const initActivation = (log, pass, form, evt) => {
	console.log("Запуск активации продукта");
	evt.preventDefault();

	initLoader(loader, form, true);

	chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
		if (request.contentScriptQuery == "activation") {
			if (request.data.boolean == true) {
				chrome.storage.local.set({ logged: `${log}` }).then(() => {});
				checkLogin(log, true, "launched");
				initLoader(loader, form, false);
			}
			if (request.data.boolean === false) {
				activateFormKeyError.classList.add("auth__error_visible");
				initLoader(loader, form, false);
			}
		}
	});

	if (log !== "" && pass !== "") {
		if (!currentState) {
			chrome.runtime.sendMessage({
				contentScriptQuery: "activation",
				data: {
					login: log,
					password: pass,
					key: activateFormKey.value,
					usid: usid,
				},
				url: `${currentIP}activation`,
			});
		}
	} else {
		activateFormKeyError.classList.add("auth__error_visible");
		activateFormKeyError.textContent = "Поля не могут быть пустыми";
		initLoader(loader, form, false);
	}
}