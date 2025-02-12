import { updateUserDB } from "../../dataBase/updateUserDB.js";

export const ChangeProfile = (req, res) => {
	if (!req.body) {
		res.sendStatus(400).end();
	}
	const field = req.body.field;
	const value = req.body.value;
	const login = req.body.login;

	console.log(`Начат процесс изменения данных аккаунта . . . `);
	const saveInfo = {
		status: `Данные не изменены. Ошибка.`,
		boolean: false,
		value: value,
		field: field,
		login: login,
		timeStamp: timeStamp(),
	};

    const changeInfo = {
        login: login,
        value: value,
    }

	updateUserDB(changeInfo, field);

	saveInfo.status = `Данные аккаунта успешно изменены.`;
	saveInfo.boolean = true;

	writeLog(login, "Change account info");

	res.send(saveInfo).end();
};
