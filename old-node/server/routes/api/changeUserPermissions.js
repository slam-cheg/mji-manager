import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";
import { updateUserDB } from "../../dataBase/updateUserDB.js";

export const ChangeUserPermissions = (req, res) => {
	if (!req.body) {
		res.sendStatus(400).end();
	}

	const login = req.body.login;
	const isAdmin = req.body.isAdmin;

	const permissionsData = {
		login: login,
		value: isAdmin,
	};

	console.log(`Начат процесс изменения доступов ${login} . . . `);
	const savePermissions = {
		status: `Доступы аккаунта ${login} не изменены. Ошибка.`,
		boolean: false,
		login: login,
		timeStamp: timeStamp(),
	};

	updateUserDB(permissionsData, "isAdmin");

	savePermissions.status = `Доступы аккаунта ${login} успешно изменены.`;
	savePermissions.boolean = true;

	writeLog(savePermissions, "changePermissions");

	res.send(savePermissions).end();
};
