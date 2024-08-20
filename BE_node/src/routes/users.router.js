const express = require("express");
const {
  createUser,
  getAllUser,
  signIn,

  getDetailUserforAdmin,
  getDetailUser,
  updateUserforAdmin,
  updateUser,
} = require("../controllers/users.controller");
const { checkSignUp } = require("../middlewares/check-sign-up.middleware");
const { checkLoginAdmin } = require("../middlewares/check-login.middleware");
const usersRouter = express.Router();

usersRouter.route("/sign-up").post(
  // [checkSignUp],
  createUser
);
usersRouter.route("/login").post(signIn);
usersRouter.route("/admin").get([checkLoginAdmin], getAllUser);
usersRouter.route("/admin/:id").get(getDetailUserforAdmin);

usersRouter.route("/update").put(updateUser);
usersRouter.route("/update/:id").put(updateUserforAdmin);
usersRouter.route("/getdetail").get(getDetailUser);

module.exports = {
  usersRouter,
};
