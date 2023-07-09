import express from "express";
import controllers from "../controller/index.js";
import middleware from "../middlewares/index.js";
import { userValidate, loginValidate } from "../validations/user.validate.js";

const { authController } = controllers;

const { authMiddleware } = middleware;

let authRouter = express.Router();

authRouter.route("/register").post(userValidate, authController.registerUser);
authRouter.route("/login").post(loginValidate, authController.loginUser);
authRouter.route("/logout").post(authMiddleware.AuthenticateUser, authController.logoutUser)

export default authRouter;
