import { fakeSelectsLayout } from "../../../extention/popup/layout/fakeSelectsLayout.js";
import { mjiAppLayout } from "../../../extention/popup/layout/mji-popup-layout.js";
import { mjiAppStyles } from "../../../extention/app/mji-app-styles.js";

export const GetAppData = (req, res) => {
	if (!req.body) {
		res.sendStatus(400);
	}
	const appData = getAppData();

	res.send(appData).end();
};

function getAppData() {
	const defectsData = JSON.parse(fs.readFileSync("./appData/data.json", "utf8"));
	const ratesData = JSON.parse(fs.readFileSync("./appData/rates.json", "utf8"));
	const representativesData = JSON.parse(fs.readFileSync("./appData/representatives.json", "utf-8"));
	const functions = JSON.parse(fs.readFileSync("./appConfig/appFlags.json", "utf-8"));
	const appLayout = {
		popupLayout: mjiAppLayout,
		stylesLayout: mjiAppStyles,
		fakeSelectList: fakeSelectsLayout,
	};
	const dataStatus = {
		defectsData: `${defectsData ? "OK" : "No data"}`,
		ratesData: `${ratesData ? "OK" : "No data"}`,
		representativesData: `${representativesData ? "OK" : "No data"}`,
		appLayout: `${appLayout ? "OK" : "No data"}`,
		functions: `${functions ? "OK" : "No data"}`,
	};
	return { defectsData, appLayout, ratesData, representativesData, dataStatus, functions };
}
