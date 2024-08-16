import { minimizeAppByEscape } from "./minimizeAppByEscape.js";

// Встраивание верстки приложения в страницу
export const createPopup = (appVariables, popupLayout, stylesLayout) => {
    const currentPage = appVariables.currentPage;
	appVariables.htmlHead.insertAdjacentHTML("beforeEnd", stylesLayout);
	appVariables.htmlBody.insertAdjacentHTML("afterBegin", popupLayout);
	appVariables.app = appVariables.htmlBody.querySelector(".mji-manager-app");
	appVariables.tabs = appVariables.app.querySelectorAll(".tabs__button");
	appVariables.tabsContent = appVariables.app.querySelectorAll(".content");

	// Установка табов и контента под текущую страницу
	currentPage === "main" ? appVariables.tabs[0].classList.add("tabs__button_active") : appVariables.tabs[1].classList.add("tabs__button_active");
	currentPage === "main" ? appVariables.tabsContent[1].classList.add("content_deactive") : appVariables.tabsContent[0].classList.add("content_deactive");

	appVariables.html.addEventListener("keyup", (evt) => {
		minimizeAppByEscape(evt, appVariables);
	});
};
