import { appVariables } from "./constants.js";

export const changeTab = (clickedTab) => {
    appVariables.tabs.forEach((tab) => {
        if (tab === clickedTab) {
            tab.classList.add("tabs__button_active");
        } else {
            tab.classList.remove("tabs__button_active");
        }
    });
    appVariables.tabsContent.forEach((content) => {
        if (clickedTab.id === content.id) {
            content.classList.remove("content_deactive");
        } else {
            content.classList.add("content_deactive");
        }
    });
}