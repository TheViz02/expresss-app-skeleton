import express from "express";
import controllers from "../controller/index.js";

const { indexController } = controllers;
let router = express.Router();

router.route("/").get(indexController.indexFunction);
router.route("/another").get(indexController.secondFunction);

export default router;
