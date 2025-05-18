import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllTags = async () => {
  return await prisma.tag.findMany();
};

export const getTagById = async (id: number) => {
  return await prisma.tag.findUnique({
    where: { id },
  });
};

export const createTag = async (data: { name: string }) => {
  return await prisma.tag.create({
    data: {
      name: data.name,
      id: undefined,
    },
  });
};
export const updateTag = async (id: number, data: { name: string }) => {
  return await prisma.tag.update({
    where: { id },
    data: {
      name: data.name,
    },
  });
};

export const deleteTag = async (id: number) => {
  return await prisma.tag.delete({
    where: { id },
  });
};
