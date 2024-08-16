// Очистка памяти LocalStorage от сохраненных копий отчетов
export const clearCache = (appVariables) => {
	appVariables.cleanButton.firstElementChild.firstElementChild.classList.add("animation");
	localStorage.removeItem("MJIDATA");
	localStorage.removeItem("DataLoaded");
	setTimeout(() => {
		appVariables.cleanButton.firstElementChild.firstElementChild.classList.remove("animation");
	}, 1100);
};
