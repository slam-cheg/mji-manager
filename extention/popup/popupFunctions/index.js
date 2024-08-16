import { createPopup } from "./createPopup.js";
import { setToStorage } from "./setToStorage.js";
import { setInitialDate } from "./setInitialDate.js";
import { startDraggingDiv, removeDefaultDrag } from "./dragPopup.js";

export const launchApp = (currentFio, login, loginIsPossible, launchStatus, appData) => {
	// Хранилище всех переменных приложения
	const appVariables = {};
	const resultsDefectsInputs = {
		empty: true,
		inputs: [],
	};
	const representativesInputs = {
		empty: true,
	};
	const allRatesPercentsInputs = {};

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

	// Верстка внутреннего попапа со стилями и верстка выпадающих окон с бекенда
	const popupLayout = appData.appLayout.popupLayout;
	const stylesLayout = appData.appLayout.stylesLayout;
	const fakeSelectList = appData.appLayout.fakeSelectList;
	const selectsValues = appData.defectsData;
	const representatives = appData.representativesData;
	const availableFunctions = appData.functions;

	// Определение наличия iFrame на странице встраивания
	appVariables.html = document.querySelector("#formCanvas").contentWindow.document.querySelector("html") || document.querySelector("html");
	appVariables.wholeAddress = document.querySelector("#title").textContent;

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

	createPopup(appVariables, popupLayout, stylesLayout);
	setToStorage(true, true, null, null);

	appVariables.dragIco = appVariables.app.querySelector(".header__drag-button");
	appVariables.inputDate = appVariables.app.querySelector("#date");
	appVariables.cleanButton = appVariables.app.querySelector("#cleanButton");
	appVariables.minimizeButton = appVariables.app.querySelector("#minimizeButton");
	appVariables.closeButton = appVariables.app.querySelector("#closeButton");
	appVariables.copyButton = appVariables.app.querySelector("#copy");
	appVariables.clearDataButton = appVariables.app.querySelector("#clean");
	appVariables.pasteButton = appVariables.app.querySelector("#paste");
	appVariables.fakeSelectsButton = appVariables.app.querySelector("#fakeSelects");
	appVariables.photoDownload = appVariables.app.querySelector(".form");
	appVariables.submitButton = appVariables.photoDownload.querySelector(".form__button");
	appVariables.formInput = appVariables.app.querySelector("#file");
	appVariables.userLogin = appVariables.app.querySelector(".account-info__login").querySelector("span");

	// Обработчики действий пользователя
	appVariables.dragIco.addEventListener("mousedown", () => {
		startDraggingDiv(appVariables);
	});
	appVariables.dragIco.addEventListener("dragstart", removeDefaultDrag);
	appVariables.cleanButton.addEventListener("click", () => {
		clearCache(appVariables);
	});
	appVariables.minimizeButton.addEventListener("click", () => {
		minimizeApp(appVariables);
	});
	appVariables.closeButton.addEventListener("click", () => {
		closeApp(appVariables);
	});
	appVariables.clearDataButton.addEventListener("click", () => {
		clearData(appVariables, availableFunctions, resultsDefectsInputs);
	});
	appVariables.copyButton.addEventListener("click", () => {
		saveData(appVariables, availableFunctions, resultsDefectsInputs);
	});
	appVariables.pasteButton.addEventListener("click", () => {
		loadData(appVariables, availableFunctions, resultsDefectsInputs, representativesInputs);
	});
	appVariables.photoDownload.addEventListener("submit", (evt) => {
		downloadPhotos(appVariables, availableFunctions, evt);
	});
	appVariables.fakeSelectsButton.addEventListener("click", () => {
		createFakeSelects(appVariables, availableFunctions, resultsDefectsInputs, selectsValues, fakeSelectList);
	});
	appVariables.tabs.forEach((tab) => {
		tab.addEventListener("click", () => {
			changeTab(appVariables, tab);
		});
	});

	appVariables.userLogin.textContent = `${currentFio}, ${login}`;

	setInitialDate(appVariables.inputDate);
	setRatings(appVariables, availableFunctions, resultsDefectsInputs, allRatesPercentsInputs, appData);
};
