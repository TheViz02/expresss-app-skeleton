import prisma from "../../prisma/index.js";
import {
    successResponse,
} from "../../utils/apiResponse.js";

export class LogoutService {
    constructor() {
        this.dbInit();
    }

    async dbInit() {
        await prisma.$connect();
        return true;
    }

    async logOutUser(data) {
        let token = data.header('auth-token');

        return await prisma.RevokedToken.create({
            data: {
                token: token
            }
        }).then((result) => {
            return {
                status: 200,
                data: successResponse("User Logout Successfully", {})
            }
        });
    }

}
