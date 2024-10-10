import { setToStorage } from "./setToStorage.js";
import { appVariables } from "./constants.js";

export const closeApp = () => {
    appVariables.cleanButton.removeEventListener("click", clearCache);
    appVariables.minimizeButton.removeEventListener("click", minimizeApp);
    appVariables.closeButton.removeEventListener("click", closeApp);
    appVariables.dragIco.removeEventListener("mousedown", startDraggingDiv);
    setToStorage(false, false, null, null);
    appVariables.app.remove();
    appVariables.htmlHead.querySelector("style").remove();
    appVariables.htmlBody.querySelectorAll(".fakeSelect").forEach((select) => {
        select.remove();
    });
    appVariables.htmlBody.querySelectorAll(".fakeSelect__selector").forEach((selector) => {
        selector.remove();
    });
}