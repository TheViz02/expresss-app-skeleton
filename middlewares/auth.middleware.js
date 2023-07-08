import { errorResponse } from "../utils/apiResponse.js";
import jwt from "jsonwebtoken";
const JWT = jwt;

export const AuthenticateUser = (req, res, next) => {
    let token = req.header('auth-token');
    if (!token) return res.status(419).send(errorResponse("Token Not Found", {}));

    try {
        const verify = JWT.verify(token, process.env.TOKEN_SECRET);

        console.log(req.userDetails);

        if (!validateToken(verify.iat)) {
            return res.status(419).send(errorResponse("Invalid Token", {}));
        }


        req.userDetails = verify;

        next();
    } catch (error) {
        res.status(500).send(errorResponse(
            "Invalid Token Occure",
            error.stack.split("\n").map((item) => item.trim())
        ));
    }
};

function validateToken(time) {
    let currentTimestamp = Math.floor(Date.now() / 1000),
        tokenValidityInSeconds = 3600,
        tokenAgeInSeconds = currentTimestamp - time;

    return (tokenAgeInSeconds > tokenValidityInSeconds) ? false : true;
}
