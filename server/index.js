import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posts from "./routes/index.js";
import register from "./routes/auth.js";
import { connectDB } from "./config/db/index.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
//connect
connectDB();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
app.use(cors());
app.use("/register", register);
app.use("/posts", posts);
app.listen(PORT, () => {
  console.log(PORT);
});
