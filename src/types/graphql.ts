
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class CreateImageInput {
    title: string;
    date: string;
    author: string;
    description: string;
    file: string;
}

export class UpdateImageInput {
    id: number;
    likes: number;
}

export class Image {
    id?: Nullable<number>;
    title: string;
    date: string;
    author: string;
    description: string;
    file: string;
    likes: number;
}

export abstract class IQuery {
    abstract images(): Nullable<Image>[] | Promise<Nullable<Image>[]>;

    abstract image(id: number): Nullable<Image> | Promise<Nullable<Image>>;
}

export abstract class IMutation {
    abstract createImage(createImageInput: CreateImageInput): Image | Promise<Image>;

    abstract updateImage(updateImageInput: UpdateImageInput): Image | Promise<Image>;

    abstract removeImage(id: number): Nullable<Image> | Promise<Nullable<Image>>;
}

type Nullable<T> = T | null;
