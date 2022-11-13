// Service for Image - using the types generated from GraphQL schema, write queries/mutations to the database using prisma

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateImageInput, UpdateImageInput } from 'src/types/graphql';

@Injectable()
export class ImageService {
  constructor(private prisma: PrismaService) {}

  // Create 1 Image: pass in title, date, author, description, file
  // ID and likes will be auto-generated
  create({ title, date, author, description, file }: CreateImageInput) {
    return this.prisma.image.create({
      data: { title, date, author, description, file },
    });
  }

  // Return array of all Images
  findAll() {
    return this.prisma.image.findMany();
  }

  // Return 1 Image
  findOne(id: number) {
    return this.prisma.image.findUnique({
      where: { id },
      //allows us to filter out potentially sensitive fields
      select: {
        title: true,
        date: true,
        author: true,
        description: true,
        file: true,
        likes: true,
      },
    });
  }

  // Update 1 Image: need the image ID and likes attribute will be modified
  update(id: number, { likes }: UpdateImageInput) {
    return this.prisma.image.update({
      where: { id },
      data: {
        likes,
      },
    });
  }

  remove(id: number) {
    return this.prisma.image.delete({
      where: { id },
    });
  }
}
