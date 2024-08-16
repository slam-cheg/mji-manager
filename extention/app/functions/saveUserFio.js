import { accountFio, loggedLogin, currentIP } from "../mji-app-scripts.js";

export const saveUserFio = () => {
	chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
		if (request.contentScriptQuery == "savefio") {
			console.log(request);
			if (request.data) {
				accountFio.classList.add("account__fio_saved");
				setTimeout(() => {
					accountFio.classList.remove("account__fio_saved");
				}, 500);
				chrome.storage.local.set({ fio: `${request.data.fio}` });
			} else {
				accountFio.classList.add("account__fio_error");
				setTimeout(() => {
					accountFio.classList.remove("account__fio_error");
				}, 500);
			}
		}
	});
	chrome.runtime.sendMessage({
		contentScriptQuery: "savefio",
		data: {
			login: loggedLogin.textContent,
			fio: accountFio.value,
		},
		url: `${currentIP}savefio`,
	});
}