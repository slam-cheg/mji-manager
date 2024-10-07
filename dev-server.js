import { app } from "./server.js";
import { ServerConfig } from "./config.js";

// Запуск сервера Node.JS
app.listen(ServerConfig.address.dev.port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Тестовый сервер запущен на адресе http://mjimanager.ru:${ServerConfig.address.dev.port}`);
	}
});