import express from "express";
import controllers from "../controller/index.js";
import { userValidate } from "../validations/user.validate.js";

const { authController } = controllers;

let authRouter = express.Router();

authRouter.route("/register").post(userValidate, authController.registerUser);
// authRouter.route("/login").post(loginValidate, loginUser);

export default authRouter;
