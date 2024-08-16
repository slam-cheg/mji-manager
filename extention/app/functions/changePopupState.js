import { authContainer, loggedContainer } from "../mji-app-scripts.js";

export const changePopupState = (status) => {
	if (status === "logged") {
		authContainer.classList.add("auth_hidden");
		loggedContainer.classList.remove("logged_hidden");
	} else {
		return;
	}
};
