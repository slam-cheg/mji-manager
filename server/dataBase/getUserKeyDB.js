import { dataBase } from "../../server.js";

export const getUserKeyDB = async (data) => {
	console.log(`Запрос данных о ключе пользователя ${data.login} в БД`);

	const sqlLogin = `SELECT * FROM "users" WHERE "key" LIKE '${data.key}'`;
	const prepareData = await dataBase.query(sqlLogin);
	if (prepareData.rowCount === 0) {
		return false;
	}
	const userData = prepareData.rows;
	console.log(`Запрос данных о ключе пользователя ${data.login} в БД выполнен`);
	return userData[0];
};
