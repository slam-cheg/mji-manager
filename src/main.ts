import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Разрешаем CORS для фронта
  app.enableCors({
    origin: '*',
  });

  // Слушаем 3000-й порт и принимаем подключения на mjimanager.ru
  await app.listen(3000, '192.168.0.99');
  console.log(`🚀 Server running on http://mjimanager.ru:3000`);
}
bootstrap();
