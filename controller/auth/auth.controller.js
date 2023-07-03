import { services } from "../../services/index.js";

const { registerService, loginService } = services;
const RegisterService = new registerService.RegisterService();
const LoginService = new loginService.LoginService();

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
