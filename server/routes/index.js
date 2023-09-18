import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/PostsController.js";

const router = express.Router();
//http://localhost:5000/posts

router.get("/", getPosts);

router.post("/", createPost);

router.post("/update", updatePost);
router.post("/delete", deletePost);

export default router;
