import { dataBase } from "../../server.js";
import { timeStamp } from "../utils/timeStamp.js";

export const getAllUsersDB = async () => {
	console.log(`Запрос списка пользователей в БД. ${timeStamp()}`);

	const sqlLogin = `SELECT * FROM "users"`;
	const prepareData = await dataBase.query(sqlLogin);

	if (prepareData.rowCount === 0) {
		return false;
	}
	const userData = prepareData.rows;
	console.log(`Запрос списка пользователей в БД выполнен. ${timeStamp()}`);
	return userData;
};
