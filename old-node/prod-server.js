import { app } from "./server.js";
import { ServerConfig } from "./config.js";

// Запуск сервера Node.JS
app.listen(ServerConfig.address.production.port, (err) => {
	if (err) {
		console.log(err);
	} else {
		console.log(`Продакшн сервер запущен на адресе http://mjimanager.ru:${ServerConfig.address.production.port}`);
	}
});