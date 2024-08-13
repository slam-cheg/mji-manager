import { dataBase } from "../../server.js";

export const setUserDataDB = async (data) => {
	console.log(`Отправка данных пользователя ${data.login} в БД`);
	const sql = `INSERT INTO "users" ("login", "password", "usid", "key", "activated") VALUES ('${data.login}', '${data.password}', 0, '${data.key}', ${data.activated})`;
	return dataBase.query(sql);
};
