import { prisma, revokedToken } from "../../prisma/index.js";
import { errorResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";

const JWT = jwt;

export const AuthenticateUser = (req, res, next) => {
    let token = req.header('Authorization').split(' ')[1] ?? '';

    if (!token) return res.status(419).send(errorResponse("Token Not Found", {}));

    validateTokenInvalid(token)
        .then((check) => {
            if (check?.token === null || check?.token)
                return res.status(419).send(errorResponse("Invalid Token", {}))

            try {
                const verify = JWT.verify(token, process.env.TOKEN_SECRET);

                if (!validateTokenExpiration(verify.iat)) {
                    return res.status(419).send(errorResponse("Token Expired", {}));
                }

                req.userDetails = verify;

                next();
            } catch (error) {
                res.status(419).send(errorResponse(
                    "Invalid Token",
                    error.stack.split("\n").map((item) => item.trim())
                ));
            }

        }).catch((error) => {
            res.status(419).send(errorResponse(
                "Invalid Token",
                error.stack.split("\n").map((item) => item.trim())
            ));
        });

};

function validateTokenExpiration(time) {
    let currentTimestamp = Math.floor(Date.now() / 1000),
        tokenValidityInSeconds = 3600,
        tokenAgeInSeconds = currentTimestamp - time;

    return (tokenAgeInSeconds < tokenValidityInSeconds);
}

async function validateTokenInvalid(token) {
    return await revokedToken.findFirst({
        where: {
            token: token
        }
    }).then((result) => {
        return result;
    });

}
