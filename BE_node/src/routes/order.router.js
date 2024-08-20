const express = require("express");
const {
  createOrder,
  updateOneOrder,
  getAllOrder,
  getAllOrderforAdmin,
  getDetailOrder,
} = require("../controllers/order.controller");
const orderRouter = express.Router();

orderRouter.route("/").post(createOrder);
orderRouter.route("/:id").put(updateOneOrder);
orderRouter.route("/user").get(getAllOrder);
orderRouter.route("/admin").get(getAllOrderforAdmin);
orderRouter.route("/:id").get(getDetailOrder);

module.exports = {
  orderRouter,
};
