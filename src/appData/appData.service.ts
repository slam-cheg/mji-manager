import { Injectable } from '@nestjs/common';
import { ConfigService } from '../config/config.service';
import { mjiPopupLayout } from './mjipopuplayout';
import { fakeSelectsLayout } from './fakeSelectsLayout';
import { mjiPopupStyles } from './mjiPopupStyles';
import { Repository } from 'typeorm';
import { AppData } from './appData.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateDefectsDTO } from './dto/update-defects.dto';
import { timeStamp } from 'src/utils/timeStamp';
import { writeLog } from 'src/utils/writeLog';

@Injectable()
export class AppDataService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(AppData)
    private readonly appDataRepository: Repository<AppData>,
  ) {}
  async getAppLayout() {
    const appData = await this.appDataRepository.findOne({ where: { id: 1 } });

    if (!appData) {
      throw new Error('Данные приложения не найдены.');
    }

    return {
      status: `Верстка приложения отдана.`,
      boolean: true,
      layout: mjiPopupLayout(appData.functions),
      timeStamp: new Date().toISOString(),
    };
  }
  async getAppData() {
    const appData = await this.appDataRepository.findOne({ where: { id: 1 } });

    if (!appData) {
      throw new Error('Данные приложения не найдены.');
    }

    const appLayout = {
      popupLayout: mjiPopupLayout(appData.functions),
      fakeSelectList: fakeSelectsLayout,
      stylesLayout: mjiPopupStyles,
    };

    const dataStatus = {
      defectsData: appData.defectsData ? 'OK' : 'No data',
      ratesData: appData.ratesData ? 'OK' : 'No data',
      representativesData: appData.representativesData ? 'OK' : 'No data',
      appLayout: appLayout ? 'OK' : 'No data',
      functions: appData.functions ? 'OK' : 'No data',
    };

    return {
      defectsData: appData.defectsData,
      appLayout: appLayout,
      ratesData: appData.ratesData,
      representativesData: appData.representativesData,
      dataStatus: dataStatus,
      functions: appData.functions,
    };
  }
  async updateDefects(dto: UpdateDefectsDTO): Promise<{ Success: boolean }> {
    const { login, defects } = dto;

    const existingAppData = await this.appDataRepository.findOne({
      where: { id: 1 },
    });

    if (!existingAppData) {
      throw new Error('Данные приложения не найдены.');
    }

    existingAppData.defectsData = defects;
    await this.appDataRepository.save(existingAppData);

    const logInfo = {
      status: `Список дефектов успешно изменен.`,
      boolean: true,
      login,
      timeStamp: timeStamp(),
    };

    writeLog(logInfo, 'ChangeDefects');

    return { Success: true };
  }
}
