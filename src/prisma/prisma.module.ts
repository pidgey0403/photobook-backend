// Create and export Prisma service so other services can access it
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  imports: [],
  controllers: [PrismaService],
  providers: [PrismaService],
})
export class PrismaModule {}
