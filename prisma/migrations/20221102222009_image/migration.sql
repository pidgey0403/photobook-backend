-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "file" TEXT NOT NULL,
    "likes" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);
