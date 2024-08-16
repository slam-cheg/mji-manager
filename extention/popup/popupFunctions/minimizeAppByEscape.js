export const minimizeAppByEscape = (evt, appVariables) => {
    if (evt.key === "Escape") {
        minimizeApp(appVariables);
    }
}