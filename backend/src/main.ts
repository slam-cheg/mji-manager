import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigModule } from '@nestjs/config';
import * as express from 'express';

// ✅ Используем require() вместо import()
const Next = require('next');

async function bootstrap() {
  ConfigModule.forRoot();
  const app = await NestFactory.create(AppModule);
  const server = express();

  // ✅ Запуск Next.js (CommonJS)
  const nextApp = Next({
    dev: process.env.NODE_ENV !== 'production',
    dir: '../../frontend',
  });

  await nextApp.prepare();
  const handle = nextApp.getRequestHandler();

  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe());

  // API-запросы через Nest.js
  server.use('/api', (req, res) => {
    app.getHttpAdapter().getInstance()(req, res);
  });
  server.use('/auth', (req, res) => {
    app.getHttpAdapter().getInstance()(req, res);
  });
  // Остальные запросы через Next.js
  server.all('*', (req, res) => handle(req, res));

  await app.listen(process.env.PORT || 3000, process.env.HOST || '192.168.0.99');
  console.log(`🚀 Server running on http://mjimanager.ru:3000`);
}

bootstrap();
