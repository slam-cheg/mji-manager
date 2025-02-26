import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import { HttpService } from "@nestjs/axios";
import { firstValueFrom } from "rxjs";

const PDFParser = require("pdf2json");

@Injectable()
export class UploadService {
	private templateJSON: any;

	constructor(private readonly httpService: HttpService) {
		// Загружаем шаблон JSON при старте сервера
		this.templateJSON = JSON.parse(fs.readFileSync("data.json", "utf8"));
	}

	// Метод для обработки PDF и отправки данных на AI, если включено
	async processFile(filePath: string, useAI: boolean): Promise<any> {
		const parsedData = await this.parsePDF(filePath);

		if (useAI) {
			console.log("🧠 Отправляем данные в AI для модификации...");
			const modifiedData = await this.modifyDataWithAI(parsedData);
			return modifiedData;
		}

		return parsedData;
	}

	// Метод для парсинга PDF
	private parsePDF(filePath: string): Promise<any> {
		return new Promise((resolve, reject) => {
			const pdfParser = new PDFParser();

			pdfParser.on("pdfParser_dataError", (err) => reject(err.parserError));
			pdfParser.on("pdfParser_dataReady", (pdfData) => {
				const pages = pdfData.Pages;
				if (!pages || pages.length === 0) {
					return reject(new Error("PDF не содержит данных страниц."));
				}

				const extractedData: string[] = [];

				pages.forEach((page) => {
					const rows: Record<number, string[]> = {};
					page.Texts.forEach((text) => {
						const content = text.R.map((r) => decodeURIComponent(r.T)).join("");
						const y = Math.round(text.y * 100);
						if (!rows[y]) rows[y] = [];
						rows[y].push(content);
					});

					extractedData.push(...Object.values(rows).map((row) => row.join(" ")));
				});

				resolve(this.fillTemplate(extractedData));
			});

			pdfParser.loadPDF(filePath);
		});
	}

	// Метод для перефразирования данных через AI (например, DeepSeek)
	public async modifyDataWithAI(data: any): Promise<any> {
		return data;
		const url = "https://api.deepseek.ai/modify"; // URL AI API
		try {
			const response = await firstValueFrom(
				this.httpService.post(url, { data }) // Отправляем данные на AI
			);
			return response.data; // Получаем модифицированные данные
		} catch (error) {
			console.error("❌ Ошибка при модификации данных через AI:", error);
			throw new Error("Ошибка при модификации данных через AI");
		}
	}

	// Метод для заполнения шаблона из извлеченных данных
	private fillTemplate(extractedData: string[]): any {
		const filledTemplate = JSON.parse(JSON.stringify(this.templateJSON));

		extractedData.forEach((line) => {
			line = line.trim();

			if (line.includes("ООО")) {
				filledTemplate.header.company.name = line;
			} else if (line.includes("Регистрационный №")) {
				filledTemplate.header.company.regNum = line.split("№")[1]?.trim() || "";
			} else if (line.includes("по адресу:")) {
				const address = line.split(":")[1].trim();
				const addressParts = address.split(",");
				filledTemplate.addressData.street = addressParts[0]?.trim() || "";
				filledTemplate.addressData.house = addressParts[1]?.trim() || "";
			} else if (line.includes("Серия проекта:")) {
				filledTemplate.objectPasport.projectSeria = line.split(":")[1]?.trim() || "";
			} else if (line.includes("Год постройки")) {
				filledTemplate.objectPasport.buildYear.initial = line.split(":")[1]?.trim() || "";
			} else if (line.includes("Физический износ")) {
				const match = line.match(/\d+,\d+/);
				filledTemplate.objectPasport.deterioration.percent = match ? parseFloat(match[0].replace(",", ".")) : 0;
			}
		});

		return filledTemplate;
	}
}
