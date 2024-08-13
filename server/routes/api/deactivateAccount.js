import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";
import { deactivateAccountDB } from "../../dataBase/deactivateAccountDB.js";

export const DeactivateAccount = (req, res) => {
	if (!req.body) {
		res.sendStatus(400).end();
	}

	const login = req.body.login;

	console.log(`Начат процесс деактивации аккаунта ${login} . . . `);

	const deactivateInfo = {
		status: `Деактивация не удалась. Ошибка.`,
		boolean: false,
		login: login,
		timeStamp: timeStamp(),
	};

	deactivateAccountDB(login);

	deactivateInfo.status = `Деактивация прошла успешно. Аккаунт ${login} не активен.`;
	deactivateInfo.boolean = true;

	writeLog(deactivateInfo, "Deactivate account");

	res.send(deactivateInfo).end();
};
