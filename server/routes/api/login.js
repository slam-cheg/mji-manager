import { getUserDataDB } from "../../dataBase/getUserDataDB.js";
import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";

export const Login = async (req, res) => {
    try {
        if (!req.body || !req.body.data || !req.body.data.login || !req.body.data.password) {
            return res.status(400).send({ status: "Ошибка: отсутствуют данные для входа" }).end();
        }

        const { login, password } = req.body.data;
        console.log(`Начат процесс входа: ${login} . . . `);

        const userData = await getUserDataDB(login);
        if (!userData) {
            return res.status(401).send({ status: "Ошибка: пользователь не найден" }).end();
        }

        // Проверяем соответствие пароля (ЗДЕСЬ ДОЛЖНО БЫТЬ ХЕШИРОВАНИЕ)
        if (userData.password !== password) {
            return res.status(401).send({ status: "Ошибка: неверный логин или пароль" }).end();
        }

        if (!userData.activated) {
            return res.status(403).send({ status: "Ошибка: аккаунт не активирован" }).end();
        }

        const response = {
            status: `Вход в аккаунт ${login} успешен`,
            fio: userData.fio,
            activated: userData.activated,
            loginIsPossible: true,
            timeStamp: timeStamp(),
            isAdmin: userData.isAdmin,
        };

        writeLog(response, "logIn");
        res.send(response).end();
    } catch (error) {
        console.error(`Ошибка входа: ${error.message}`);
        res.status(500).send({ status: "Ошибка сервера" }).end();
    }
};
