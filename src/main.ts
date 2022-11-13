// Bootstrap the NestJS application

import { NestFactory } from '@nestjs/core';
// import our App Module containing all controllers and providers required
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = '0.0.0.0';
  await app.listen(process.env.PORT || 3000, host);
}
bootstrap();
