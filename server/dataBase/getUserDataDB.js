import { dataBase } from "../../server.js";
import { timeStamp } from "../utils/timeStamp.js";

export const getUserDataDB = async (login) => {
	console.log(`Запрос данных пользователя ${login} в БД. ${timeStamp()}`);

	const sql = `SELECT * FROM "users" WHERE "login" LIKE '${login}'`;
	const prepareData = await dataBase.query(sql);
	if (prepareData.rowCount === 0) {
		return false;
	}
	const userData = prepareData.rows;
	console.log(`Запрос данных пользователя ${login} в БД выполнен. ${timeStamp()}`);
	return userData[0];
};
