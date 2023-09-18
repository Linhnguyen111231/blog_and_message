import { TokenModel } from "../model/Token.js";
import { UserModel } from "../model/User.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const createAccount = async (req, res) => {
  try {
    const accountRequest = req.body;
    if (accountRequest.password != accountRequest.confirmPassword) {
      return res
        .status(400)
        .json({ error: "Xác thực mật khẩu không chính xác" });
    }
    const existingUser = await UserModel.findOne({
      username: accountRequest.username,
    });

    if (existingUser) {
      return res.status(400).json({ error: "Người dùng đã tồn tại" });
    }

    const newAccount = new UserModel(accountRequest);
    newAccount.password = await bcryptjs.hash(accountRequest.password, 10);

    await newAccount.save();
    const token = jwt.sign(
      { username: accountRequest.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );
    const saveToken = TokenModel({
      userID: newAccount._id,
      token: token,
      expirationTime: new Date(new Date().getTime() + 120 * 60 * 1000),
    });
    await saveToken.save();
    res.status(200).json({ token: saveToken.token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const refreshToken = (res, req) => {};
