import { getUserDataDB } from "../../dataBase/getUserDataDB.js";
import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";

export const Login = (req, res) => {
	const signIn = {
		status: `Вход в аккаунт ${req.body.data.login} заблокирован. Не пройдена активация`,
		fio: "",
		activated: false,
		loginIsPossible: false,
		timeStamp: timeStamp(),
		isAdmin: false,
	};
	if (!req.body) {
		res.sendStatus(400);
	}
	if (!req.body.data.login) {
		signIn.status = `Вход в аккаунт ${req.body.data.login} заблокирован. Не введен логин`;
		res.send(signIn).end();
	}
	const reqData = req.body.data;

	console.log(`Начат процесс входа аккаунт ${reqData.login} . . . `);

	const resData = getUserDataDB(reqData.login);



	resData.then((resPromise) => {
		if (resPromise === undefined) {
			signIn.status = `Вход в аккаунт ${reqData.login} заблокирован. Ошибка чтения базы`;
			//res.send(signIn).end();
		}

		// Проверка правильности логина/пароля
		if (resPromise.login === reqData.login && resPromise.password === reqData.password) {
			if (resPromise.activated) {
				signIn.loginIsPossible = true;
				signIn.status = `Вход в аккаунт ${reqData.login} успешен`;
				signIn.activated = resPromise.activated;
				signIn.fio = resPromise.fio;
				signIn.isAdmin = resPromise.isAdmin;
			}
		} else {
			signIn.status = `Вход в аккаунт ${reqData.login} заблокирован. Не верный логин или пароль`;
		}

		// Ответ на фронт о возможности авторизации
		writeLog(signIn, "logIn");
		res.send(signIn).end();
	});
};
