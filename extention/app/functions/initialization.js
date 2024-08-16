import { loader, loginForm, serverError, appData } from "../mji-app-scripts.js";
import { initLoader } from "./initLoader.js";
import { launchApp } from "../popupFunctions/index.js";

// Инициализация запуска рабочего окна
export const initialization = (currentFio, login, loginIsPossible, launchStatus) => {
	console.log("Запуск приложения");
	initLoader(loader, loginForm, true);
	function init() {
		if (appData) {
			serverError.classList.remove("server-error_visible");
			chrome.tabs.query({ active: true }, (tabs) => {
				const tab = tabs[0];
				if (tab) {
					chrome.scripting.executeScript({
						args: [currentFio, login, loginIsPossible, launchStatus, appData],
						target: { tabId: tab.id, allFrames: true },
						func: launchApp,
					});
				}
			});
			initLoader(loader, loginForm, false);
		} else {
			setTimeout(init, 200);
		}
	}
	init();
};
