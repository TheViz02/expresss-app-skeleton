import express from "express";
import cors from "cors";
import createError from "http-errors";
import router from "./routes/route.js";
import { log } from "./utils/logging.js";
import { errorHandling } from "./middlewares/basic.middleware.js";

const app = express();

/**
 * JSON Request for APIs
 */
app.use(express.json());

app.use("/", router);

/**
 * URL Encoded request for APIs
 */
app.use(express.urlencoded({ extended: true }));

/**
 * Enabling CORS for all requests
 */
app.use(cors());
app.options("*", cors());

/**
 * If Any Endpoint not found
 */
app.use(function (req, res, next) {
  next(createError(404));
});

app.use(errorHandling);

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  log.error(err);
  res.status(err.status || 500);
  res.json({
    error: err.message,
    statuscode: err.status || 500,
  });
});

export default app;
