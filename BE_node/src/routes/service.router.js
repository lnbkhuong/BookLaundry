const express = require("express");
const {
  createService,
  deleteService,
  getAllService,
  updateOneService,
  getAllServiceforAdmin,
} = require("../controllers/service.controller");
const {
  checkLoginMiddleware, checkLoginAdmin,
} = require("../middlewares/check-login.middleware");
const serviceRouter = express.Router();

serviceRouter.route("/").post(
  // [checkLoginMiddleware],
  createService
);
serviceRouter.route("/:id").put([checkLoginMiddleware], updateOneService);
serviceRouter.route("/:id").delete([checkLoginMiddleware], deleteService);
serviceRouter.route("/").get(getAllService);
serviceRouter.route("/admin").get([checkLoginAdmin],getAllServiceforAdmin);

module.exports = {
  serviceRouter,
};
