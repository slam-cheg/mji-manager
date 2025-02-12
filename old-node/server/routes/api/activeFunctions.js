import fs from "fs";
import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";

export const ActiveFunctions = (req, res) => {
	if (!req.body) {
		res.sendStatus(400).end();
	}

	const chahgingFunctons = {
		status: `Работа функций не изменена. Ошибка.`,
		boolean: false,
		timeStamp: timeStamp(),
	};

	fs.writeFileSync("../../appData/activeFuntions.json", JSON.stringify(req.body.functions, null, 2));

	chahgingFunctons.status = `Работа функций успешно изменена.`;
	chahgingFunctons.boolean = true;

	writeLog(chahgingFunctons, "changingFunctions");
	res.send({ Success: true }).end();
};
