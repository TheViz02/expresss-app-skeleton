import { PrismaClient } from "@prisma/client";
import { Logs } from "../utils/logging.js";
let prisma;

try {
    prisma = new PrismaClient();
} catch (error) {
    Logs.error(error);
    console.error(error);
}

export default prisma;
