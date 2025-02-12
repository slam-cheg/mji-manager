import { fakeSelectsLayout } from "../../appData/fakeSelectsLayout.js";
import { mjiPopupLayout } from "../../appData/mjiPopupLayout.js";
import { mjiPopupStyles } from "../../appData/mjiPopupStyles.js";
import fs from "fs";
import { timeStamp } from "../../utils/timeStamp.js";

export const GetAppData = (req, res) => {
	if (!req.body) {
		res.sendStatus(400);
	}
	const appData = getAppData();
	console.log(`appData отдан на фронт ${timeStamp()}`)
	res.send(appData).end();
};

function getAppData() {
	const defectsData = JSON.parse(fs.readFileSync("./server/appData/defects.json", "utf8")); // Необходимо перенести все в БД
	const ratesData = JSON.parse(fs.readFileSync("./server/appData/rates.json", "utf8")); // Необходимо перенести все в БД
	const representativesData = JSON.parse(fs.readFileSync("./server/appData/representatives.json", "utf-8")); // Необходимо перенести все в БД
	const functions = JSON.parse(fs.readFileSync("./server/appData/activeFunctions.json", "utf-8")); // Необходимо перенести все в БД
	const appLayout = {
		popupLayout: mjiPopupLayout,
		fakeSelectList: fakeSelectsLayout,
		stylesLayout: mjiPopupStyles,
	};
	const dataStatus = {
		defectsData: `${defectsData ? "OK" : "No data"}`,
		ratesData: `${ratesData ? "OK" : "No data"}`,
		representativesData: `${representativesData ? "OK" : "No data"}`,
		appLayout: `${appLayout ? "OK" : "No data"}`,
		functions: `${functions ? "OK" : "No data"}`
	};
	return { defectsData, appLayout, ratesData, representativesData, dataStatus, functions };
}
 