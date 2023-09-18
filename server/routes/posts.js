import express from "express";
const router = express.Router();
import {
  createPost,
  deletePost,
  getPosts,
  updatePost,
} from "../controllers/PostsController.js";
router.use("/posts", getPosts);
router.use("/post/create", createPost);
router.use("/post/update", updatePost);
router.use("/post/delete", deletePost);

export default router;
