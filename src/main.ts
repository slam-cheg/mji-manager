import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({ origin: '*' }); // ✅ Разрешаем CORS для фронта
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000, '192.168.0.99'); // ✅ Запускаем только NestJS
  console.log(`🚀 Server running on http://mjimanager.ru:3000`);
}

bootstrap();
