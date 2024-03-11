// src/models/image.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface Image {
  id: number;
  path: string;
}

export async function createImage(path: string): Promise<Image> {
  return await prisma.image.create({
    data: {
      path: path,
    },
  });
}

export async function getAllImages(): Promise<Image[]> {
  const images = await prisma.image.findMany();
  return images.map((image) => ({
    id: image.id,
    path: image.path,
  }));
}
