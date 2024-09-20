import express from "express";
import controllers from "../controller/index.js";
import middleware from "../middlewares/index.js";
const { indexController, dataController } = controllers;

const { basicMiddleware, authMiddleware } = middleware;

let router = express.Router();

router.use(basicMiddleware.errorHandling);
// router.use(AuthenticateUser);
// console.log(AuthenticateUser);
router
    .route("/")
    .get(basicMiddleware.basicCheck, indexController.indexFunction);

router.route("/another").get(indexController.secondFunction);

router
    .route("/data")
    .get(authMiddleware.AuthenticateUser, dataController.getData)
    .post(authMiddleware.AuthenticateUser, dataController.saveData);

router
    .route("/data/:id")
    .get(authMiddleware.AuthenticateUser, dataController.getSelectedData)
    .put(authMiddleware.AuthenticateUser, dataController.updateData)
    .delete(authMiddleware.AuthenticateUser, dataController.deleteData);

export default router;
