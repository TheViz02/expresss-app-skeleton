import { prisma } from "../../prisma/index.js";
import { errorResponse, successResponse } from "../../utils/apiResponse.js";
export class DataService {
  constructor() {
    this.dbInit();
  }

  /**
   * Connects to Prisma Client
   * @returns {boolean}
   */
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

  async saveData(req) {
    try {
      return await prisma.data
        .create({
          data: {
            name: req.name,
            email: req.email,
            phoneNumber: req.phoneNumber,
          },
        })
        .then((res) => {
          return successResponse("Data Saved Sucessfully", res);
        });
    } catch (error) {
      if (error) return errorResponse("Oopsie, an error occured!!", error);
    }
  }
}
