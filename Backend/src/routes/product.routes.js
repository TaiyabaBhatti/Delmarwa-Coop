import express from "express";
import {
  getAllProducts,
  getSingleProduct,
  uploadProduct,
} from "../controllers/product.controller.js";
import { verifyJWTToken } from "../middlewares/auth.middleware.js";

const productRoute = express.Router();

productRoute.get("", getAllProducts);
productRoute.get("/:productId", getSingleProduct);
productRoute.post("", uploadProduct);

export default productRoute;
