import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],  // ✅ Регистрируем `ConfigService`
  exports: [ConfigService],  // ✅ Делаем `ConfigService` доступным в других модулях
})
export class AppConfigModule {}
