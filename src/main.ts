import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  ConfigModule.forRoot();
  const app = await NestFactory.create(AppModule);

  // Разрешаем CORS для фронта
  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(new ValidationPipe());

  // Слушаем 3000-й порт и принимаем подключения на mjimanager.ru
  await app.listen(
    process.env.PORT || 3000,
    process.env.HOST || '192.168.0.99',
  );
  console.log(`🚀 Server running on http://mjimanager.ru:3000`);
}
bootstrap();
