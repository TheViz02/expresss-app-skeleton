import express from "express";
import controllers from "../controller/index.js";

const { indexController, dataController } = controllers;
let router = express.Router();

router.route("/").get(indexController.indexFunction);
router.route("/another").get(indexController.secondFunction);
router.route("/data").get(dataController.getData).post(dataController.saveData);

export default router;
