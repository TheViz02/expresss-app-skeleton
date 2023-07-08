import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../prisma/index.js";
import {
    errorResponse,
    successResponse,
    validationResponse,
} from "../../utils/apiResponse.js";
const JWT = jwt;
export class LoginService {
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

    async userLogin(data) {
        let checkUserExist = await prisma.User.findUnique({
            where: {
                email: data.email,
            },
        });

        if (!checkUserExist) {
            return {
                statusCode: 400,
                data: validationResponse("User not found", [
                    { fields: "email", message: "User Email not found" },
                ]),
            };
        }

        let validatePassword = await bcrypt.compare(
            data.password,
            checkUserExist.password
        );

        if (!validatePassword) {
            return {
                statusCode: 400,
                data: validationResponse("Incorrect Password", [
                    { fields: "password", message: "Password Entered is incorrect" },
                ]),
            };
        }

        let userDetails = {
            id: checkUserExist.id,
            userName: checkUserExist.userName,
            email: checkUserExist.email,
        };

        let tokenGenerate = JWT.sign(userDetails, process.env.TOKEN_SECRET);

        return {
            statusCode: 200,
            data: successResponse("User Authenticated Successfully", {
                id: checkUserExist.id,
                userName: checkUserExist.userName,
                email: checkUserExist.email,
                password: checkUserExist.password,
                token: tokenGenerate,
            }),
        };
    }
}
