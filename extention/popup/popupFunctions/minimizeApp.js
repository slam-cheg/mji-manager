// Минимизация приложения в нижний край экрана
export const minimizeApp = (appVariables) => {
	appVariables.app.style.transition = "0.5s";
	appVariables.app.classList.toggle("app_minimized");
	setTimeout(() => {
		appVariables.app.style.transition = null;
	}, 500);
};
