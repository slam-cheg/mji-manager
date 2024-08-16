import { currentIP } from "../mji-app-scripts.js";

// Получаем данные о дефектах и верстку приложения с бекенда
export const getAppData = () => {
	console.log("Запрашиваем данные приложения");
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		if (request.contentScriptQuery == "appdata") {
			appData = request.data;
		}
	});
	chrome.runtime.sendMessage({
		contentScriptQuery: "appdata",
		data: "give me data",
		url: `${currentIP}appdata`,
	});
};
