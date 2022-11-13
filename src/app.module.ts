// Module for App - contains all necessary imports, and lists controllers and providers

import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ImageModule } from './image/image.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      typePaths: ['./**/*.graphql'], //specify where graphQL types should go
      definitions: {
        //schema first approach -> transform graphQL schema into ts classes
        path: join(process.cwd(), 'src/types/graphql.ts'),
        outputAs: 'class',
      },
    }),
    PrismaModule, // import PrismaModule to access PrismaService
    ImageModule, // import ImageModule to access ImageService
  ],
  controllers: [AppController], // App controller to handle routing
  providers: [AppService], // App service to handle functional logic
})
export class AppModule {}
