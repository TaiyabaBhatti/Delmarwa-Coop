import { NOT_FOUND_CODE, SUCCESS_CODE } from "../constant.js";
import { Product } from "../modles/product.model.js";
import ApiError from "../utility/ApiError.class.js";
import ApiResponse from "../utility/ApiResponse.class.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import { setFiltersQuery } from "../utility/catalougeFilters.js";
import { setSortQueries } from "../utility/catalougeSort.js";

export const getAllProducts = asyncHandler(async (req, res) => {
  // query parameter implementations
  // search
  const { search, rating, minPrice, maxPrice, sort } = req.query;
  let filters = setFiltersQuery({ search, rating, minPrice, maxPrice });
  let sortValues = setSortQueries(sort);
  let productsFromDB;

  // actions in databse

  if (filters) {
    productsFromDB = await Product.find(filters);
  }
  if (sort) {
    productsFromDB = await Product.find(filters).sort(sortValues);
  }
  if (!filters) {
    productsFromDB = await Product.find();
  }

  if (productsFromDB.length === 0) {
    return res
      .status(NOT_FOUND_CODE)
      .json(new ApiResponse(NOT_FOUND_CODE, [], "No products Found"));
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
