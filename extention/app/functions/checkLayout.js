// Если в storage "status" остался статус init: true - рабочее окно не откроется. Эта функция обнуляет storage "status" до исходного.
export const checkLayoutBeforeInit = () => {
	console.log("Проверили статус запуска");
	chrome.tabs.query({ active: true }, (tabs) => {
		const tab = tabs[0];
		if (tab) {
			chrome.scripting.executeScript({
				target: { tabId: tab.id, allFrames: true },
				func: () => {
					try {
						document.querySelector(".mji-manager-app").remove();
					} catch {}
					localStorage.setItem("status", JSON.stringify({ layout: false, init: false, authorized: false, uid: null }));
				},
			});
		}
	});
}
