import { SERVER_ERROR_CODE } from "../constant.js";
import ApiResponse from "../utility/ApiResponse.class.js";

export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statuscode || SERVER_ERROR_CODE
  return res
    .status(statusCode)
    .json(
      new ApiResponse(
        statusCode,
        {},
        err.message || "Internal Server Error"
      )
    );
};
