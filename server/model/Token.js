import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
    expirationTime: {
      type: Date,
    },
  },
  { timestamps: true }
);
export const TokenModel = mongoose.model("Token", schema);
