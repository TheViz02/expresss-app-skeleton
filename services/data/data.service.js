import { prisma } from "../../prisma/index.js";
import { successResponse } from "../../utils/apiResponse.js";
export class DataService {
  constructor() {
    this.dbInit();
  }

  async dbInit() {
    await prisma.$connect();
    return true;
  }

  async getData() {
    return successResponse(
      "Data Fetched Successfully!!",
      await prisma.data.findMany()
    );
  }
}
