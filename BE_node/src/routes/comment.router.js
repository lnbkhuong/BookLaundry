const express = require("express");
const { createNewComment, replyComment, getAllCommentsOnPost } = require("../controllers/comment.controller");

const commentRouter = express.Router();

// tao comment cho bai viet/ phong nao/ ve xe nao
commentRouter.route("/").post(createNewComment)

// reply comment
commentRouter.route("/:parentCommentId").post(replyComment)

// lay tat ca comment cua 1 bai viet/ phong/ ve xe/ san bong
commentRouter.route("/:postId").get(getAllCommentsOnPost)

module.exports = {
  commentRouter,
};
