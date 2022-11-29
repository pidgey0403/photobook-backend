// Global prisma module that is exported and provides Prisma to other services

import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  exports: [PrismaService], // make PrismaService available to other modules
  providers: [PrismaService], // Instantiate this module by the Nest.js injector
})
export class PrismaModule {}
