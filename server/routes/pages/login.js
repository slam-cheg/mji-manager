import { __dirname } from "../../../server.js";
import { timeStamp } from "../../utils/timeStamp.js";

export const LoginPage = (req, res) => {
	if (!req.body) {
		res.sendStatus(400);
	}
	console.log("Страница авторизации", timeStamp());
	res.sendFile(__dirname + "/public/pages/login.html");
};
