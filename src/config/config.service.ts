import * as fs from 'fs';
import * as path from 'path';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
  private readonly flagsFilePath: string; // ✅ Объявляем переменную

  constructor() {
    this.flagsFilePath = path.join(__dirname, '../../appConfig/appFlags.json');
  }

  updateActiveFunctions(functions: Record<string, any>): boolean {
    try {
      fs.writeFileSync(this.flagsFilePath, JSON.stringify(functions, null, 2));
      return true;
    } catch (error) {
      console.error('Ошибка при записи в activeFunctions.json:', error);
      return false;
    }
  }

  getFunctionsList(): Record<string, any> {
    try {
      const data = fs.readFileSync(this.flagsFilePath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      console.error('Ошибка чтения appFlags.json:', error);
      return {};
    }
  }
}
