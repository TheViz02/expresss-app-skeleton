import Joi from "joi";
import { validationResponse } from "../utils/apiResponse.js";
import { validationOptions } from "./validationOptions/options.js";

let userSchema = Joi.object({
  userName: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{6,15}$/
    )
    .required(),
  confirm_password: Joi.ref("password"),
});

export async function userValidate(request, response, next) {
  try {
    let req = request.body;
    const { error, value } = await userSchema.validateAsync(
      {
        userName: req.userName,
        password: req.password,
        email: req.email,
        confirm_password: req.confirm_password,
      },
      validationOptions
    );

    if (error) {
      let errorMessage = error.details.flatMap((e) => {
        return { field: e.path[0], message: e.message };
      });

      return response
        .status(422)
        .json(validationResponse("Validation Error", errorMessage));
    }

    next();
  } catch (error) {
    // console.log(error.details);
    let errorMessage = error.details.flatMap((e) => {
      return { field: e.path[0], message: e.message };
    });

    return response
      .status(422)
      .json(validationResponse("Validation Error", errorMessage));
  }
}

let loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

export async function loginValidate(request, response, next) {
  try {
    let req = request.body;

    const { error, value } = await loginSchema.validateAsync(
      {
        email: req.email,
        password: req.password,
      },
      validationOptions
    );

    if (error) {
      let errorMessage = error.details.flatMap((e) => {
        return { field: e.path[0], message: e.message };
      });

      return response
        .status(422)
        .json(validationResponse("Validation Error", errorMessage));
    }

    next();
  } catch (error) {
    let errorMessage = error.details.flatMap((e) => {
      return { field: e.path[0], message: e.message };
    });

    return response
      .status(422)
      .json(validationResponse("Validation Error", errorMessage));
  }
}
