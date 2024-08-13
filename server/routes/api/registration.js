import { timeStamp } from "../../utils/timeStamp.js";
import { keygen } from "../../utils/keygen.js";
import { writeLog } from "../../dataBase/writeLog.js";
import { getUserDataDB } from "../../dataBase/getUserDataDB.js";
import { setUserDataDB } from "../../dataBase/setUserDataDB.js";

export const Registration = (req, res) => {
	if (!req.body) {
		res.sendStatus(400);
	}

	const data = {
		login: req.body.login,
		password: req.body.password,
		fio: req.body.fio,
		usid: 0,
		key: keygen(),
		activated: false,
	};

	const regData = {
		status: `Регистрация аккаунта ${data.login} завершилась неудачно. Такой логин уже зарегистрирован`,
		registration: false,
		key: "Not generated",
		timeStamp: timeStamp(),
	};

	console.log(`Начат процесс регистрации аккаунта ${data.login}`);
	const resData = getUserDataDB(data);

	resData.then((resPromise) => {
		// Если ответ базы положителен - такой аккаунт уже существует. Регистрация блокируется.
		if (!resPromise) {
			// При отрицательном ответе от БД регистрация проходит штатно
			regData.registration = true;
			regData.status = `Регистрация аккаунта ${data.login} завершилась успешно`;
			regData.key = `${data.key}`;
			setUserDataDB(data);
		}

		console.log(regData.text);
		writeLog(regData, "Registration");
		res.send(regData).end();
	});
};
