// Bootstrap the NestJS application

import { NestFactory } from '@nestjs/core';
// import our App Module containing all controllers and providers required
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
