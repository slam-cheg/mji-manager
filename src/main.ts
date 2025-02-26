import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as bodyParser from "body-parser";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const server = app.getHttpServer();
	console.log(server)

	app.enableCors({ origin: "*" }); // ✅ Разрешаем CORS для фронта
	app.useGlobalPipes(new ValidationPipe());
	app.use(bodyParser.json({ limit: "50mb" })); // Увеличиваем лимит до 50MB
	app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

	await app.listen(3000, "200.0.0.100"); // ✅ Запускаем только NestJS
	console.log(`🚀 Server running on http://mjimanager.ru:3000`);
}

bootstrap();
