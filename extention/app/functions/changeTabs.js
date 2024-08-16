export const changeTab = (formsTabs, formsAll, clickedTab) => {
	formsTabs.forEach((tab) => {
		if (tab === clickedTab) {
			tab.classList.add("tabs__button_active");
		} else {
			tab.classList.remove("tabs__button_active");
		}
	});
	formsAll.forEach((form) => {
		if (clickedTab.id === form.id) {
			form.classList.add("auth__form_active");
		} else {
			form.classList.remove("auth__form_active");
		}
	});
};
