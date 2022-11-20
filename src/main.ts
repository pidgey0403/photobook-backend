// Bootstrap the NestJS application

import { NestFactory } from '@nestjs/core';
// import our App Module containing all controllers and providers required
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Allow for larger JSON request input sizes
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });
  const host = '0.0.0.0';
  await app.listen(process.env.PORT || 3001, host);
}
bootstrap();
