import express from "express";
import { createAccount } from "../controllers/AccountController.js";

const router = express.Router();
//http://localhost:5000/posts

router.post("/create", createAccount);

export default router;
