"use strict";
import { errorResponse } from "../utils/apiResponse.js";
import { log } from "../utils/logging.js";

export const basicCheck = (req, res, next) => {
  let s = true;
  log.info(s);
  if (s) next();
  else res.redirect("/another");
};

export const errorHandling = (err, req, res, next) => {
  if (err) {
    // console.log(err);
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500).send(errorResponse("Error Occured", err));
  } else {
    console.log("Working");
    next();
  }
};
