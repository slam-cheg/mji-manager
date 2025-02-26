import { Controller, Post, Body } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";
import { UploadService } from "./upload.service"; // Импортируем UploadService
import { API_ROUTES } from "src/config/api.config";

@Controller("api")
export class UploadController {
	constructor(private readonly uploadService: UploadService) {} // Внедряем сервис

	@Post(API_ROUTES.app.uploadPDF)
	async uploadPdf(@Body() body: { fileName: string; fileData: string; useAI: boolean }) {
		if (!body || !body.fileName || !body.fileData) {
			console.error("❌ Ошибка: данные не получены должным образом.");
			return { success: false, message: "Неверный формат данных" };
		}

		try {
			console.log(`📥 Декодируем base64 в PDF для файла: ${body.fileName}`);

			// Убираем data:application/pdf;base64,
			const base64Data = body.fileData.split(",")[1];
			const buffer = Buffer.from(base64Data, "base64");

			// Сохраняем файл на сервере
			const filePath = path.join(__dirname, "../../uploads", body.fileName);
			fs.writeFileSync(filePath, buffer);
			console.log(`✅ Файл успешно сохранен: ${filePath}`);

			// Запускаем процесс парсинга
			console.log(`Парсинг в процессе...`);
			const parsedData = await this.uploadService.processFile(filePath, body.useAI);
			console.log(`Парсинг завершен`);

			// Если AI включен, отправляем данные в DeepSeek для перефразирования
			if (body.useAI) {
				console.log("🧠 AI модификация включена. Отправляем данные в DeepSeek...");
				const modifiedData = await this.uploadService.modifyDataWithAI(parsedData);
				return { success: true, data: modifiedData };
			}

			// Если AI выключен, возвращаем данные без изменений
			return { success: true, data: parsedData.data.surveyResults };
		} catch (error) {
			console.error("❌ Ошибка обработки Base64 PDF:", error);
			return { success: false, error: error.message };
		}
	}
}
