import { PrismaClient } from "@prisma/client";
import { Role } from "../../../generated/prisma";
const prisma = new PrismaClient();
import { createUserType, updateUserType } from "./type";

export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({
    where: { id },
  });
};

export const createUser = async (data: createUserType) => {
  return await prisma.user.create({
    data: {
      name: data.name,
      username: data.username,
      password: data.Password,
      role: data.role,
    },
  });
};

export const updateUser = async (id: number, data: updateUserType) => {
  return await prisma.user.update({
    where: { id },
    data,
  });
};
export const deleteUser = async (id: number) => {
  return await prisma.user.delete({
    where: { id },
  });
};
// await bcrypt.hash(password,10)
