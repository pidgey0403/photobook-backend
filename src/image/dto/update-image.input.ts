import { CreateImageInput } from './create-image.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateImageInput extends PartialType(CreateImageInput) {
  id: number;
}
