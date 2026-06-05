import express from "express";
import {
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import { verifyJWTToken } from "../middlewares/auth.middleware.js";
import ApiResponse from "../utility/ApiResponse.class.js";
import { SUCCESS_CODE } from "../constant.js";
const userRoute = express.Router();

userRoute.post("/login", loginUser);
userRoute.post("/register", registerUser);

// protected routes
userRoute.get("/logout", verifyJWTToken, logoutUser);
userRoute.get("/verify-token", verifyJWTToken, (req, res) => {
  res
    .status(200)
    .json(
      new ApiResponse(SUCCESS_CODE, req.user, "Token verified successfully")
    );
});

export default userRoute;
