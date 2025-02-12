import { Controller, Get, Body } from '@nestjs/common';
import { timeStamp } from '../utils/timeStamp';
import { API_ROUTES } from 'src/config/api.config';

@Controller('api')
export class SystemController {
  @Get(API_ROUTES.system.checkResponse)
  async checkResponse(@Body() body: any) {
    if (!body) {
      return { status: "400", message: "Not responding" };
    }

    console.log("Проверка ответа сервера", timeStamp());
    return { status: "200", message: "OK" };
  }
}
