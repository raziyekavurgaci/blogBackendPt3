import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const saveRefreshToken = async (
  userId: number,
  token: string,
  expiresAt: Date
) => {
  return await prisma.refreshToken.create({
    data: {
      userId,
      token,
      expiresAt,
    },
  });
};

export const findRefreshToken = async (token: string) => {
  return await prisma.refreshToken.findUnique({
    where: { token },
  });
};

export const revokeRefreshToken = async (token: string) => {
  return await prisma.refreshToken.update({
    where: { token },
    data: { revokedAt: new Date() },
  });
};
