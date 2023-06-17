import express from "express";
import cors from "cors";
import createError from "http-errors";
import router from "./routes/route.js";
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

export default app;
