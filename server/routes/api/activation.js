import { getUserDataDB } from "../../dataBase/getUserDataDB.js";
import { getUserKeyDB } from "../../dataBase/getUserKeyDB.js";
import { updateUserDB } from "../../dataBase/updateUserDB.js";
import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";

export const Activation = (req, res) => {
	if (!req.body) {
		res.sendStatus(400).end();
	}
	const reqData = req.body.data;
	const dbk = getUserKeyDB(reqData);
	const resData = getUserDataDB(reqData);

	console.log(`Начат процесс активации аккаунта ${reqData.login} . . . `);
	const activation = {
		status: `Аккаунт ${reqData.login} не активирован. Не верный ключ`,
		boolean: false,
		activated: false,
		timeStamp: timeStamp(),
	};

	const activationData = {
		login: reqData.login,
		password: reqData.password,
		usid: 0,
		key: reqData.key,
		value: false,
	};

	let k = "";

	// Проверка наличия этого ключа в базе
	dbk.then((kp) => {
		k = kp.key;
	});

	resData.then((resPromise) => {
		if (resPromise == undefined) {
			console.log("Ошибка обращения к БД");
            activation.status = "Ошибка обращения к БД";
			res.send(activation).end();
		}

		// Если логин и пароль совпадают с зарегистрированными - проходим проверку дальше
		if (reqData.login === resPromise.login && reqData.password === resPromise.password) {
			// Аккаунт должен иметь статус activated false и ключ в БД должен быть таким же что вводит пользователь. Статус сохраняется в базе
			if (resPromise.activated === false && k === reqData.key) {
				activation.boolean = true;
				activation.status = `Аккаунт ${reqData.login} успешно активирован`;
				activationData.value = true;
				activation.activated = true;
				updateUserDB(activationData, "activated");
			}

			// Если у аккаунта уже установлен ключ активации и он совпадает - возможность входа сохраняется
			if (resPromise.key === k && resPromise.activated === true) {
				activation.boolean = true;
				activation.activated = true;
				activation.status = `Аккаунт ${reqData.login} уже активирован`;
			}

			// Если такой же ключ активации найден в БД, то попытка активации блокируется
			// Если попытаться активировать аккаунт другим ключем, то попытка активации блокируется
			if (resPromise.key !== k && !resPromise.activated) {
				activation.status = `Аккаунт ${reqData.login} не активирован. Такой ключ не зарегистрирован`;
			}
		} else {
			// Если логин или пароль не совпадают - активация блокируется
			activation.status = `Аккаунт ${reqData.login} не активирован. Логин или пароль не верные`;
		}

		console.log(activation.status, activation.timeStamp);
		writeLog(activation, "Activation");
		res.send(activation).end();
	});
};
