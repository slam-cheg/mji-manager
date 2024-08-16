import { ServerConfig } from "../../config.js";
import { saveUserFio } from "./functions/saveUserFio.js";
import { signOut } from "./functions/signOut.js";
import { changeTab } from "./functions/changeTabs.js";
import { logIn } from "./functions/login.js";
import { initActivation } from "./functions/initActivation.js";

const formsTabs = document.querySelectorAll(".tabs__button");
const formsAll = document.querySelectorAll(".auth__form");
export const authContainer = document.querySelector(".auth");
export const loggedContainer = document.querySelector(".logged");
export const loggedLogin = loggedContainer.querySelector(".logged__login");
const loggedExitButton = loggedContainer.querySelector(".logged__button");
const accountInfo = document.querySelector(".account");
export const accountFio = accountInfo.querySelector(".account__fio");

export const loginForm = document.querySelector(".auth__form_login");
const loginFormLogin = loginForm.querySelector("#login");
const loginFormPassword = loginForm.querySelector("#password");

const activateForm = document.querySelector(".auth__form_first");
const activateFormLogin = activateForm.querySelector("#login");
const activateFormPassword = activateForm.querySelector("#password");
export const activateFormKey = activateForm.querySelector("#key");
export const activateFormKeyError = activateForm.querySelector("#error-key");

export const serverError = document.querySelector(".server-error");

export const loader = document.querySelector(".loader");

export const currentIP = `http://${ServerConfig.address.ip}:${ServerConfig.address.port}`;
export let appData = undefined;

loggedExitButton.addEventListener("click", () => {
	signOut(authContainer, loggedContainer, loggedLogin, accountFio, accountInfo);
});
loginForm.addEventListener("submit", (evt) => {
	logIn(loginFormLogin.value, loginFormPassword.value, loginForm, evt);
});

activateForm.addEventListener("submit", (evt) => {
	initActivation(activateFormLogin.value, activateFormPassword.value, activateForm, evt);
});

formsTabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		changeTab(formsTabs, formsAll, tab);
	});
});

loggedLogin.addEventListener("click", showAccountInfo);
accountFio.addEventListener("change", saveUserFio);

function showAccountInfo() {
	accountInfo.classList.toggle("account_hidden");
}



