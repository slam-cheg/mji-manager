import { __dirname } from "../../../server.js";

export const DefectEditorPage = (req, res) => {
	if (!req.body) {
		res.sendStatus(400);
	}
	console.log("Страница изменения дефектов открыта", timeStamp());
	res.sendFile(__dirname + "/public/pages/defect-editor.html");
};
