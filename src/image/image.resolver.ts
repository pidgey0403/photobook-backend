// Resolver for Image - creates the queries/mutations using GraphQL by calling the methods generated in Image service
// Responsible for routing handling for the GraphQL API

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateImageInput, UpdateImageInput } from '../types/graphql';
import { ImageService } from './image.service';

@Resolver('Image')
export class ImageResolver {
  constructor(private readonly imageService: ImageService) {}

  // Create an Image mutation: passes in the createImageInput type to the imageService
  @Mutation('createImage')
  create(@Args('createImageInput') createImageInput: CreateImageInput) {
    return this.imageService.create(createImageInput);
  }

  // Find all Images query: returns the findAll() method from imageService
  @Query('images')
  findAll() {
    return this.imageService.findAll();
  }

  // Find 1 Image query: returns the findOne() method from imageService and passes in an ID
  @Query('image')
  findOne(@Args('id') id: number) {
    return this.imageService.findOne(id);
  }

  // Update an Image mutation: passes in updateImageInput type into the update() method from imageService
  @Mutation('updateImage')
  update(@Args('updateImageInput') updateImageInput: UpdateImageInput) {
    return this.imageService.update(updateImageInput.id, updateImageInput);
  }

  // Remove an Image mutation: passes in an ID to the remove() method from imageService
  @Mutation('removeImage')
  remove(@Args('id') id: number) {
    return this.imageService.remove(id);
  }
}
