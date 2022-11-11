import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageResolver } from './image.resolver';

@Module({
  providers: [ImageResolver, ImageService]
})
export class ImageModule {}
