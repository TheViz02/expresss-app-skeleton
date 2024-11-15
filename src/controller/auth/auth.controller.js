import { services } from "../../services/index.js";

const { registerService, loginService, logoutService } = services;

const RegisterService = new registerService.RegisterService();
const LoginService = new loginService.LoginService();
const LogoutService = new logoutService.LogoutService();

export const registerUser = (req, res) => {
    RegisterService.userRegister(req.body).then((result) => {
        return res.status(result.statusCode).send(result.data);
    });
};

export const loginUser = (req, res) => {
    LoginService.userLogin(req.body).then((result) => {
        return res.status(result.statusCode).send(result.data);
    });
};

export const logoutUser = (req, res) => {
    LogoutService.logOutUser(req).then((response) => {
        return res.status(response.status).send(response.data);
    });
};
