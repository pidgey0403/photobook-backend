// Spec testing for the Image Resolver

import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { ImageResolver } from './image.resolver';
import { ImageService } from './image.service';

describe('ImageResolver', () => {
  let resolver: ImageResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ImageResolver,
        ImageService,
        {
          provide: PrismaService,
          useValue: {},
        },
      ],
    }).compile();

    resolver = module.get<ImageResolver>(ImageResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
