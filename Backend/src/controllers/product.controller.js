import { NOT_FOUND_CODE, SUCCESS_CODE } from "../constant.js";
import { Product } from "../modles/product.model.js";
import ApiError from "../utility/ApiError.class.js";
import ApiResponse from "../utility/ApiResponse.class.js";
import { asyncHandler } from "../utility/asyncHandler.js";
import { setFiltersQuery } from "../utility/catalougeFilters.js";
import { setSortQueries } from "../utility/catalougeSort.js";
import { dataConversion } from "../utility/dataConversion.js";

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

export const uploadProduct = asyncHandler(async (req, res) => {
  const {
    title,
    brandName,
    price,
    description,
    keyFeatures,
    imageUrls,
    rating,
    numReviews,
    stockCount,
  } = req.body;

  if (
    [
      title,
      brandName,
      price,
      description,
      keyFeatures,
      imageUrls,
      rating,
      numReviews,
      stockCount,
    ].some((field) => !field)
  ) {
    console.log("Error 1");
    throw new ApiError(400, "All fields are required");
  }
  // already existed products
  const existedProduct = await Product.findOne({ name });

  if (existedProduct) {
    throw new ApiError(400, "Product with that name already exist.");
  }

  // creatin product - save it - also returned saved data

  const { priceConv, numReviewsConv, ratingConv, stockCountConv } =
    dataConversion(price, numReviews, rating, stockCount);
  console.log(priceConv, numReviewsConv, ratingConv, stockCountConv);
  if (
    [priceConv, numReviewsConv, ratingConv, stockCountConv].some((value) =>
      Number.isNaN(value)
    )
  ) {
    console.log("Error 2");
    throw new ApiError(400, "All fields are required");
  }

  const keyFeaturesStr = keyFeatures.map((item) => item.value);
  const imageUrlStr = imageUrls.map((item) => item.value);
  const productInDatabase = await Product.create({
    title,
    brandName,
    price: priceConv,
    description,
    keyFeatures: keyFeaturesStr,
    imageUrls: imageUrlStr,
    rating: ratingConv,
    numReviews: numReviewsConv,
    stockCount: stockCountConv,
  });

  // consoling for getting know
  console.log(`created Product in database: ${productInDatabase}`);
  return res
    .status(201)
    .json(
      new ApiResponse(201, productInDatabase, "Product created Successfully")
    );
});
