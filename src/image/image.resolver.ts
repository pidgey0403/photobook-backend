// Resolver for Image - creates the queries/mutations using GraphQL by calling the methods generated in Image service
// Responsible for routing handling for the GraphQL API

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateImageInput, UpdateImageInput } from 'src/types/graphql';
import { ImageService } from './image.service';

@Resolver('Image')
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  @Mutation('createImage')
  create(@Args('createImageInput') createImageInput: CreateImageInput) {
    return this.imageService.create(createImageInput);
  }

  @Query('images')
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
