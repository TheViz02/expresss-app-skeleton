import { services } from "../../services/index.js";

const { registerService } = services;
const RegisterService = new registerService.RegisterService();

export const registerUser = (req, res) => {
  console.log(req.body);
  RegisterService.userRegister(req.body).then((result) => {
    return res.status(result.statusCode).send(result.data);
  });
};
