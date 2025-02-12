import { dataBase } from "../../server.js";

export const deactivateAccountDB = (login) => {
	const sql = `UPDATE "users" SET "activated"=${false} WHERE "login"='${login}'`;
	const sqlTwo = `UPDATE "users" SET "key"='' WHERE "login"='${login}'`;

	dataBase.query(sqlTwo);
	return dataBase.query(sql);
};
