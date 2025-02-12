import { mjiPopupLayout } from "../../appData/mjiPopupLayout.js";
import { timeStamp } from "../../utils/timeStamp.js";
import { writeLog } from "../../dataBase/writeLog.js";

export const GetApp = (req, res) => {
    if (!req.body) {
		res.sendStatus(400).end();
	}

	const getAppData = {
		status: `Верстка приложения отдана.`,
		boolean: true,
        layout: mjiPopupLayout,
		timeStamp: timeStamp(),
	};

	writeLog(getAppData, "getApp");
	res.send(getAppData).end();
}