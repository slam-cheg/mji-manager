import { dataBase } from "../../server.js";

export const updateUserDB = async (data, column) => {
	console.log(`Обновление данных пользователя ${data.login} в БД`);
	const sql = `UPDATE "users" SET "${column}"='${data.value}' WHERE "login"='${data.login}'`;
	return dataBase.query(sql);
};
