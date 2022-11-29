// Module for Image - local module that packages the ImageResolver and ImageService

import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageResolver } from './image.resolver';

@Module({
  providers: [ImageResolver, ImageService], // modules to be instantiated
})
export class ImageModule {}
