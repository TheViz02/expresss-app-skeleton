import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

const prismaClient = new PrismaClient();

export const prisma = prismaClient;

// Assing models Here!!
export const user = prismaClient.user;
export const data = prismaClient.data;
export const revokedToken = prismaClient.revokedToken;
