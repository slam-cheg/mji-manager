import { __dirname } from "../../../server.js";
import { timeStamp } from "../../utils/timeStamp.js";

export const ProfilePage = (req, res) => {
	if (!req.body) {
		res.sendStatus(400);
	}

	console.log("Открыта страница профиля", timeStamp());
	res.sendFile(__dirname + "/public/pages/lk.html");
};
