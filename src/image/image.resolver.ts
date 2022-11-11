import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ImageService } from './image.service';
import { CreateImageInput } from './dto/create-image.input';
import { UpdateImageInput } from './dto/update-image.input';

@Resolver('Image')
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Mutation('createImage')
  create(@Args('createImageInput') createImageInput: CreateImageInput) {
    return this.imageService.create(createImageInput);
  }

  @Query('image')
  findAll() {
    return this.imageService.findAll();
  }

  @Query('image')
  findOne(@Args('id') id: number) {
    return this.imageService.findOne(id);
  }

  @Mutation('updateImage')
  update(@Args('updateImageInput') updateImageInput: UpdateImageInput) {
    return this.imageService.update(updateImageInput.id, updateImageInput);
  }

  @Mutation('removeImage')
  remove(@Args('id') id: number) {
    return this.imageService.remove(id);
  }
}
