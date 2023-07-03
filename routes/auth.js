import express from "express";
import controllers from "../controller/index.js";
import { userValidate, loginValidate } from "../validations/user.validate.js";

const { authController } = controllers;

let authRouter = express.Router();

authRouter.route("/register").post(userValidate, authController.registerUser);
authRouter.route("/login").post(loginValidate, authController.loginUser);

export default authRouter;
