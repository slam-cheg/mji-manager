import { getAllUsersDB } from "../../dataBase/getAllUsersDB.js";
import fs from "fs";

export const AllUsersData = (req, res) => {
	const login = req.body.login;
	const resData = getAllUsersDB();
	const functions = JSON.parse(fs.readFileSync("./appConfig/appFlags.json", "utf-8"));
	const result = {
		staffList: "",
		functionsList: functions,
	};
	const getAdminInfo = {
		status: `Ошибка получения данных о правах пользователя.`,
		login: login,
		boolean: false,
		timeStamp: timeStamp(),
	};
	resData.then((resPromise) => {
		if (resPromise === undefined) {
			writeLog(getAdminInfo, "getAdminInfo");
			res.send(result).end();
		}

		getAdminInfo.status = `Данные о правах пользователя успешно получены.`;
		getAdminInfo.boolean = true;

		writeLog(getAdminInfo, "getAdminInfo");

		result.staffList = resPromise;
		res.send(result).end();
	});
};
