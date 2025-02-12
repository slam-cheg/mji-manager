import { updateUserDB } from "../../dataBase/updateUserDB.js";
import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";

export const UpdateFio = (req, res) => {
	if (!req.body) {
		res.sendStatus(400).end();
	}
	const reqData = req.body.data;
	const fio = reqData.fio;
	const login = reqData.login;

    const changeFioData = {
		value: fio,
		login: login,
    }

	console.log(`Начат процесс изменения ФИО у аккаунта ${login} . . . `);
	const savefio = {
		status: `ФИО аккаунта ${login} не изменено. Ошибка.`,
		boolean: false,
		fio: fio,
		timeStamp: timeStamp(),
	};

	updateUserDB(changeFioData, "fio");

	savefio.status = `ФИО аккаунта ${login} успешно изменено.`;
	savefio.boolean = true;

	writeLog(savefio, "changeFio");

	res.send(savefio).end();
};
