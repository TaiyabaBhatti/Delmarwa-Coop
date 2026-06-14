import express from "express";
import { verifyJWTToken } from "../middlewares/auth.middleware.js";
import { createOrder, getOrderById } from "../controllers/order.controller.js";

const orderRoute = express.Router();

orderRoute.post("/create-order", verifyJWTToken, createOrder);
orderRoute.get("/:orderId", verifyJWTToken, getOrderById);

export default orderRoute;
