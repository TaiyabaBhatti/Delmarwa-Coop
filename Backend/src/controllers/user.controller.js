import {
  BAD_REQUEST_CODE,
  CONFLICT_CODE,
  CREATED_CODE,
  NOT_FOUND_CODE,
  UNAUTHORIZED_CODE,
} from "../constant.js";
import { User } from "../modles/user.model.js";

import ApiError from "../utility/ApiError.class.js";
import ApiResponse from "../utility/ApiResponse.class.js";
import generateAccessRefreshTokens from "../utility/generateAccessRefreshTokens.js";


// register user
export const registerUser = async (req, res, next) => {
  
  try {
    const { username, email, password, fullname } = req.body;
    if ([username, email, password, fullname].some((field) => !field)) {
      throw new ApiError(BAD_REQUEST_CODE, "All fields are required");
    }

    const existedUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existedUser) {
      throw new ApiError(
        BAD_REQUEST_CODE,
        "User already exists with this email or username."
      );
    }

    const user = await User.create({
      username: username.toLowerCase(),
      email,
      fullname,
      password,
    });

    const createdUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );
    if (!createdUser) {
      throw new ApiError(CONFLICT_CODE, "User not created");
    }
    res
      .status(CREATED_CODE)
      .json(
        new ApiResponse(CREATED_CODE, createdUser, "Successfully registered")
      );
  } catch (error) {
    next(error);
  }
};

// user login
export const loginUser = async (req, res, next) => {
  console.log("1")
  try {
    const { identifier, password } = req.body;
    if (!identifier || !password) {
      throw new ApiError(BAD_REQUEST_CODE, "All fields are required");
    }

    const userInDb = await User.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });
    if (!userInDb) {
      throw new ApiError(
        NOT_FOUND_CODE,
        "User with this email or username is not found"
      );
    }

    const checkPassword = await userInDb.passwordCheck(password);
    if (!checkPassword) {
      throw new ApiError(UNAUTHORIZED_CODE, "Password is incorrect");
    }
    const { accessToken, refreshToken } = await generateAccessRefreshTokens(
      userInDb._id
    );
    const loggedInUser = await User.findById(userInDb._id).select(
      "-password -refreshToken"
    );
    const options = {
      httpOnly: true,
      secure: true,
    };
    res
      .status(CREATED_CODE)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json(
        new ApiResponse(
          CREATED_CODE,
          loggedInUser,
          "User logged In Successfully"
        )
      );
  } catch (error) {
    next(error);
  }
};
