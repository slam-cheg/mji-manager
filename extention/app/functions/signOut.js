import { refresh } from "./refreshApp.js";

export const signOut = (authContainer, loggedContainer, loggedLogin, accountFio, accountInfo) => {
	console.log("Вышли из приложения");
	authContainer.classList.remove("auth_hidden");
	loggedContainer.classList.add("logged_hidden");
	loggedLogin.textContent = "#####";
	accountFio.value = "#. #. #####";
	accountInfo.classList.add("account_hidden");
	chrome.storage.local.clear();
	refresh();
};
