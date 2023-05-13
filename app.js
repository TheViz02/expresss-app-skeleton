const express = require("express");
const app = express();
const cors = require("cors");
const createError = require("http-errors");
let index = require("./routes/route");
/**
 * JSON Request for APIs
 */
app.use(express.json());

app.use("/", index);

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

app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    error: err.message,
    statuscode: err.status || 500,
  });
});

module.exports = app;
