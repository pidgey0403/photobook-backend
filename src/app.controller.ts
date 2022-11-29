// Controller for App - basic routing for the application

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Basic hello messsage when you make a get request to the app
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
