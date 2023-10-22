"use strict";
import { errorResponse } from "../utils/apiResponse.js";
import { Logs } from "../utils/logging.js";

export const basicCheck = (req, res, next) => {
  let s = true;
  Logs.info(s);
  if (s) next();
  else res.redirect("/another");
};

export const errorHandling = (err, req, res, next) => {
  if (err) {
    // console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    Logs.error(err.stack.split("\n").map((item) => item.trim()));

    res.status(err.status || 500).send(
      errorResponse("Error Occured", {
        message: err.message,
        error: err.stack.split("\n").map((item) => item.trim()),
      })
    );
  } else {
    console.log("Working");
    next();
  }
};
