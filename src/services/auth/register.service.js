// import prisma from "../../../prisma/index.js";
import { prisma } from "../../../prisma/index.js";
import bcrypt from "bcrypt";
import {
    errorResponse,
    successResponse,
    validationResponse,
} from "../../utils/apiResponse.js";

export class RegisterService {
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
    async userRegister(data) {
        try {
            let emailExists = await user.findUnique({
                where: { email: data.email },
            });

            if (emailExists) {
                let emailValidate = {
                    statusCode: 422,
                    data: validationResponse("Email Already Exists", [
                        { fields: "email", message: "Email Already Exists" },
                    ]),
                };

                return emailValidate;
            }

            let salt = await bcrypt.genSalt(10);
            let hashedPassword = await bcrypt.hash(data.password, salt);

            return await prisma.User.create({
                data: {
                    userName: data.userName,
                    email: data.email,
                    password: hashedPassword,
                },
            }).then((res) => {
                return {
                    statusCode: 200,
                    data: successResponse("User Created Successfully", res),
                };
            });
        } catch (error) {
            if (error)
                return {
                    statusCode: 500,
                    data: errorResponse("Oopsie, an error occured!!", error),
                };
        }
    }
}
