import { NOT_FOUND_CODE, SUCCESS_CODE } from "../constant.js";
import { Product } from "../modles/product.model.js";
import ApiError from "../utility/ApiError.class.js";
import ApiResponse from "../utility/ApiResponse.class.js";
import { asyncHandler } from "../utility/asyncHandler.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  // query parameter implementations
  // search
  const { search, rating, minPrice, maxPrice } = req.query;
  let filters = {};
  let productsFromDB;
  if (search) {
    filters.title = {
      $regex: search,
      $options: "i",
    };
  }

  if (rating) {
    filters.rating = {
      $gte: Number(rating),
    };
  }

  if (minPrice || maxPrice) {
    filters.price = {};

    if (minPrice) {
      filters.price.$gte = Number(minPrice);
    }

    if (maxPrice) {
      filters.price.$lte = Number(maxPrice);
    }
  } else {
    productsFromDB = await Product.find();
  }

  // actions in databse
  //ignore case - i
  // find search in this title
  console.log(filters);
  productsFromDB = await Product.find(filters);

  if (productsFromDB.length === 0) {
    return res
      .status(SUCCESS_CODE)
      .json(new ApiResponse(SUCCESS_CODE, [], "No products Found"));
  }

  return res
    .status(SUCCESS_CODE)
    .json(
      new ApiResponse(
        SUCCESS_CODE,
        productsFromDB,
        "Successfully Fetched Products"
      )
    );
});

export const getSingleProduct = asyncHandler(async (req, res) => {
  const { productId } = req.params;
  const singleProductFromDB = await Product.findById(productId);
  if (!singleProductFromDB) {
    throw new ApiError(NOT_FOUND_CODE, "Product with this id not found.");
  }
  return res
    .status(SUCCESS_CODE)
    .json(
      new ApiResponse(
        SUCCESS_CODE,
        singleProductFromDB,
        "Successfully Fetched Single Product"
      )
    );
});
