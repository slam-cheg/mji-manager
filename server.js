import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import pkg from "pg";
import cors from "cors";
import { ServerConfig } from "./config.js";
import { HomePage } from "./server/routes/pages/home.js";
import { RegistrationPage } from "./server/routes/pages/registration.js";
import { Registration } from "./server/routes/api/registration.js";
import { Activation } from "./server/routes/api/activation.js";
import { Login } from "./server/routes/api/login.js";
import { UserData } from "./server/routes/api/userData.js";
import { AllUsersData } from "./server/routes/api/allUsersData.js";
import { LoginPage } from "./server/routes/pages/login.js";
import { ProfilePage } from "./server/routes/pages/profile.js";
import { DefectEditorPage } from "./server/routes/pages/defectEditor.js";
import { SaveDefects } from "./server/routes/api/saveDefects.js";
import { UpdateFio } from "./server/routes/api/updateFio.js";
import { ActiveFunctions } from "./server/routes/api/activeFunctions.js";
import { ChangeUserPermissions } from "./server/routes/api/changeUserPermissions.js";
import { ChangeProfile } from "./server/routes/api/changeProfile.js";
import { DeactivateAccount } from "./server/routes/api/deactivateAccount.js";
import { GetAppData } from "./server/routes/api/getAppData.js";
import { GetApp } from "./server/routes/api/getApp.js";
import { NodePage } from "./server/routes/api/nodePage.js";
import { CheckResponseFromServer } from "./server/routes/api/checkResponseFromServer.js";

const { Client } = pkg;
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const app = express();

app.use(cors(ServerConfig.corsOptions));

// Настройка получения запросов с фронта на бек
app.use(express.json());

// Чтение всей директории с файлами
app.use(express.static(__dirname));

// PAGES
app.get(ServerConfig.routes.pages.home, cors(ServerConfig.corsOptions), (req, res) => {
	HomePage(req, res);
});

app.get(ServerConfig.routes.pages.node, cors(ServerConfig.corsOptions), (req, res) => {
	NodePage(req, res);
});

app.get(ServerConfig.routes.pages.registration, cors(ServerConfig.corsOptions), (req, res) => {
	RegistrationPage(req, res);
});

app.get(ServerConfig.routes.pages.login, cors(ServerConfig.corsOptions), (req, res) => {
	LoginPage(req, res);
});

app.get(ServerConfig.routes.pages.profile, cors(ServerConfig.corsOptions), (req, res) => {
	ProfilePage(req, res);
});

app.get(ServerConfig.routes.pages.defectEditor, cors(ServerConfig.corsOptions), (req, res) => {
	DefectEditorPage(req, res);
});

// API
app.post(ServerConfig.routes.api.registration, cors(ServerConfig.corsOptions), (req, res) => {
	Registration(req, res);
});

app.post(ServerConfig.routes.api.activation, cors(ServerConfig.corsOptions), (req, res) => {
	Activation(req, res);
});

app.post(ServerConfig.routes.api.login, cors(ServerConfig.corsOptions), (req, res) => {
	Login(req, res);
});

app.post(ServerConfig.routes.api.userData, cors(ServerConfig.corsOptions), (req, res) => {
	UserData(req, res);
});

app.post(ServerConfig.routes.api.allUsersData, cors(ServerConfig.corsOptions), (req, res) => {
	AllUsersData(req, res);
});

app.post(ServerConfig.routes.api.saveDefects, cors(ServerConfig.corsOptions), (req, res) => {
	SaveDefects(req, res);
});

app.post(ServerConfig.routes.api.saveFio, cors(ServerConfig.corsOptions), (req, res) => {
	UpdateFio(req, res);
});

app.post(ServerConfig.routes.api.activeFunctions, cors(ServerConfig.corsOptions), (req, res) => {
	ActiveFunctions(req, res);
});

app.post(ServerConfig.routes.api.changeUserPermissions, cors(ServerConfig.corsOptions), (req, res) => {
	ChangeUserPermissions(req, res);
});

app.post(ServerConfig.routes.api.changeAccount, cors(ServerConfig.corsOptions), (req, res) => {
	ChangeProfile(req, res);
});

app.post(ServerConfig.routes.api.deactivateAccount, cors(ServerConfig.corsOptions), (req, res) => {
	DeactivateAccount(req, res);
});

app.post(ServerConfig.routes.api.getAppData, cors(ServerConfig.corsOptions), (req, res) => {
	GetAppData(req, res);
});

app.get(ServerConfig.routes.api.checkResponseFromServer, cors(ServerConfig.corsOptions), (req, res) => {
	CheckResponseFromServer(req, res);
});

app.get(ServerConfig.routes.api.getApp, cors(ServerConfig.corsOptions), (req, res) => {
	GetApp(req, res);
});

export const dataBase = new Client(ServerConfig.dataBase);
await dataBase.connect();