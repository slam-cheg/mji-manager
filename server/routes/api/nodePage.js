export const NodePage = (req, res) => {
    if (!req.body) {
		res.sendStatus(400);
	}
    console.log("Запрос версии сервера")
	res.send("Сервер работает на NodeJS 20.10.0").end();
};