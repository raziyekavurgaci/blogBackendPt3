import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { createPostType, updatePostType } from "./type";

export const getAllPosts = async (
  showDeleted: string,
  status: string,
  category?: number,
  tag?: string
) => {
  let whereCondition: Record<string, any> = {};

  if (showDeleted === "onlyDeleted") {
    whereCondition.deleted_at = { not: null };
  } else if (showDeleted !== "true") {
    whereCondition.deleted_at = null;
  }

  if (category !== undefined) {
    whereCondition.category_id = category;
  }

  if (status === "published") {
    whereCondition.published_at = { not: null };
  } else if (status === "draft") {
    whereCondition.published_at = null;
  }
  if (tag) {
    const tagIds = tag
      .split(",")
      .map((id) => Number(id))
      .filter((id) => !isNaN(id));
    whereCondition.post_tags = {
      some: {
        tagId: { in: tagIds },
      },
    };

    return await prisma.post.findMany({
      where: whereCondition,
      include: { post_tags: true },
    });
  }
};

export const getPostById = async (id: number) => {
  return await prisma.post.findFirst({
    where: { id, deleted_at: null },
  });
};

export const createPost = async (data: createPostType) => {
  return await prisma.post.create({
    data,
  });
};

export const updatePost = async (id: number, data: updatePostType) => {
  return await prisma.post.update({
    where: { id },
    data,
  });
};

export const deletePost = async (id: number) => {
  return await prisma.post.update({
    where: { id },
    data: { deleted_at: new Date() },
  });
};
