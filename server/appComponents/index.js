import { appData, appVariables } from "./constants.js";
import { createPopup } from "./createPopup.js";
import { setToStorage } from "./setToStorage.js";
import { setInitialDate } from "./setInitialDate.js";
import { setRatings } from "./setRatings.js";

export const launchApp = (currentFio, login, loginIsPossible, launchStatus, appDataString) => {
    appData = JSON.parse(appDataString);

	// Предотвращение двойного старта
	if (!localStorage.getItem("status")) {
		setToStorage(false, launchStatus, null, null);
	} else {
		const storageData = JSON.parse(localStorage.getItem("status"));
		if (storageData.init) {
			return;
		} else {
			if (loginIsPossible) {
				setToStorage(false, launchStatus, null, null);
			}
		}
	}

	// Верстка внутреннего попапа со стилями и верстка выпадающих окон


	// Определение наличия iFrame на странице встраивания
    appVariables.html = document.querySelector("#formCanvas").contentWindow.document.querySelector("html") || document.querySelector("html");
	appVariables.wholeAddress = document.querySelector("#title")?.textContent;

	// Определение тегов head и body в документе
	appVariables.htmlHead = appVariables.html.querySelector("head");
	appVariables.htmlBody = appVariables.html.querySelector("body");

	// Определение страницы встраивания с фото или с отчетом
	appVariables.form = appVariables.htmlBody.querySelector("#formData107") || appVariables.htmlBody.querySelector("#formData181");

	if (appVariables.form.id === "formData107") {
		appVariables.currentPage = "photo";
	}
	// } else {
	if (appVariables.form.id === "formData181") {
		appVariables.currentPage = "main";
	}

	createPopup(appVariables.currentPage);
	setToStorage(true, true, null, null);

	setInitialDate(appVariables.inputDate);

	// Встраивание верстки приложения в страницу
	createPopup(currentPage)

	setRatings();
}