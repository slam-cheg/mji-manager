import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppData } from './appData.entity';
import { AppDataController } from './appData.controller';
import { AppDataService } from './appData.service';
import { AppConfigModule } from '../config/config.module';

@Module({
  imports: [TypeOrmModule.forFeature([AppData]), AppConfigModule],
  controllers: [AppDataController],
  providers: [AppDataService],
  exports: [AppDataService],
})
export class AppDataModule {}
