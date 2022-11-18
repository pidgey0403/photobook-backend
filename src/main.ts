// Bootstrap the NestJS application

import { NestFactory } from '@nestjs/core';
// import our App Module containing all controllers and providers required
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const host = '0.0.0.0';
  await app.listen(process.env.PORT || 3001, host);
}
bootstrap();
