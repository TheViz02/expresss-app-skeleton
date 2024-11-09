// import prisma from "../../../prisma/index.js";
import { prisma, data } from "../../../prisma/index.js";
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

    async getData(user) {
        var result = await data.findMany({
            where: {
                userId: user.id
            }
        });

        return successResponse(
            "Data Fetched Successfully!!",
            result
        );
    }

    async saveData(req) {
        try {
            return await data
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

    async updateData(data) {
        try {
            return await data
                .update({
                    where: { id: data.id },
                    data: {
                        name: data.name,
                        email: data.email,
                        phoneNumber: data.phoneNumber,
                    },
                })
                .then((res) => {
                    return successResponse("Data Updated Successfully", res);
                });
        } catch (error) {
            if (error) {
                console.log(error);
                return errorResponse("Oopsie, an error occur!!", error);
            }
        }
    }

    async deleteData(id) {
        try {
            return await data
                .delete({
                    where: {
                        id: id,
                    },
                })
                .then((res) => {
                    return successResponse("Data Deleted Successfully", res);
                });
        } catch (error) {
            if (error) {
                console.log(error);
                return errorResponse("Oopsie, an error occur!!", error);
            }
        }
    }

    async getSelectedData(data) {
        try {
            return await data
                .findUnique({
                    where: {
                        id: data.id,
                    },
                })
                .then((res) => {
                    return successResponse("Data get Successfully!!", res);
                });
        } catch (error) {
            if (error) {
                console.log(error);
                return errorResponse("Oopsie, an error occur!!", error);
            }
        }
    }
}
