import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import * as express from 'express';
import Next from 'next';

async function bootstrap() {
  ConfigModule.forRoot();
  const app = await NestFactory.create(AppModule);
  const server = express();

  // Подключаем Next.js в режиме SSR
  const nextApp = Next({
    dev: process.env.NODE_ENV !== 'production',
    dir: './frontend', // ⚡ Next.js работает из папки frontend/
  });
  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();

  // Разрешаем CORS для фронта
  app.enableCors({
    origin: '*',
  });

  app.useGlobalPipes(new ValidationPipe());

  // 🔥 Все API-запросы (начинаются с `/api`) отдаются через Nest.js
  server.all('/api/*', (req, res) => {
    app.getHttpAdapter().getInstance()(req, res);
  });

  // 🔥 Все остальные запросы отдаются через Next.js
  server.all('*', (req, res) => handle(req, res));

  // Слушаем 3000-й порт и принимаем подключения на mjimanager.ru
  await app.listen(
    process.env.PORT || 3000,
    process.env.HOST || '192.168.0.99',
  );

  console.log(`🚀 Server running on http://mjimanager.ru:3000`);
}

bootstrap();
