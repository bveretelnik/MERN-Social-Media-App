import express from "express";
import {
  createPost,
  deletePost,
  getPosts,
  likePost,
  updatePost,
} from "../controllers/post.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);
router.delete("/:id", auth, deletePost);
router.patch("/:id", auth, updatePost);
router.patch("/:id/likePost", auth, likePost);

export default router;
