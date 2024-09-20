import * as loginService from "./auth/login.service.js";
import * as registerService from "./auth/register.service.js";
import * as logoutService from "./auth/logout.service.js";
import * as indexService from "./index.service.js";
import * as dataService from "./data/data.service.js";

export const services = {
    loginService,
    registerService,
    indexService,
    dataService,
    logoutService
};
