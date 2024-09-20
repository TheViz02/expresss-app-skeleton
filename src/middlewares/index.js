import * as basicMiddleware from "./basic.middleware.js";
import * as authMiddleware from "./auth.middleware.js";

const middleware = { basicMiddleware, authMiddleware };

export default middleware;
