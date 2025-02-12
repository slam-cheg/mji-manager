import { timeStamp } from "../../utils/timeStamp.js";
import { __dirname } from "../../../server.js";

export const RegistrationPage = (req, res) => {
	if (!req.body) {
		res.sendStatus(400);
	}
	console.log("Страница регистрации открыта", timeStamp());
	res.sendFile(__dirname + "/public/pages/registration.html");
};
