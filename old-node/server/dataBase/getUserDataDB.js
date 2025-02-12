import { dataBase } from "../../server.js";
import { timeStamp } from "../utils/timeStamp.js";

export const getUserDataDB = async (login) => {
    try {
        console.log(`Запрос данных пользователя ${login} в БД. ${timeStamp()}`);
        
        // Используем параметризованный запрос для защиты от SQL-инъекций
        const sql = `SELECT * FROM "users" WHERE "login" = $1`;
        const prepareData = await dataBase.query(sql, [login]);
        
        if (prepareData.rowCount === 0) {
            return null; // Возвращаем null вместо false для четкой логики
        }
        
        const userData = prepareData.rows[0];
        console.log(`Запрос данных пользователя ${login} в БД выполнен. ${timeStamp()}`);
        return userData;
    } catch (error) {
        console.error(`Ошибка при получении данных пользователя: ${error.message}`);
        return null;
    }
};
