// Services for Prisma - create a class that extends PrismaClient so we have access to it

import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../node_modules/.prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super();
  }
}
