import {
  BAD_REQUEST_CODE,
  CREATED_CODE,
  NOT_FOUND_CODE,
  SUCCESS_CODE,
} from "../constant.js";
import { Order } from "../modles/order.model.js";
import { Product } from "../modles/product.model.js";
import { User } from "../modles/user.model.js";
import ApiError from "../utility/ApiError.class.js";
import ApiResponse from "../utility/ApiResponse.class.js";
import { asyncHandler } from "../utility/asyncHandler.js";
export const createOrder = asyncHandler(async (req, res) => {
  // validate address
  const { address, cartItems } = req.body;

  if (
    [
      address.firstName,
      address.lastName,
      address.street,
      address.city,
      address.state,
      address.postalCode,
      address.phone,
    ].some((field) => !field)
  ) {
    throw new ApiError(BAD_REQUEST_CODE, "All fields are required");
  }
  console.log(req.body);
  //   if (user.shippingAddress?.include(address)) {
  //     throw new ApiError(BAD_REQUEST_CODE, "Address already exists");
  //   }

  let orderItems = [];
  for (const item of cartItems) {
    const product = await Product.findById(item.productId);
    if (!product) {
      throw new ApiError(NOT_FOUND_CODE, "Product Not found");
    }
    orderItems.push({
      productId: product._id,
      title: product.title,
      price: product.price,
      quantity: item.quantity,
    });
  }

  let orderPrice = 0;
  orderItems.forEach((item) => {
    orderPrice += item.price * item.quantity;
  });

  const user = await User.findById(req.user._id);
  // save address to user

  if (user.shippingAddresses.length === 0) {
    user.shippingAddresses.push(address);
  } else {
  }

  await user.save({ validateBeforeSave: false });

  // create order
  const order = await Order.create({
    customer: req.user._id,
    address,
    orderPrice,
    orderItems,
  });

  if (!order) {
    throw new ApiError(NOT_FOUND_CODE, "Order not found");
  }
  console.log(order);
  // response

  return res
    .status(CREATED_CODE)
    .json(
      new ApiResponse(
        CREATED_CODE,
        { orderId: order._id, orderPrice: orderPrice },
        "Successfully placed order"
      )
    );
});

export const getOrderById = asyncHandler(async (req, res) => {
  const { orderId } = req.params;
  const order = await Order.findById(orderId);
  if (!order) {
    throw new ApiError(NOT_FOUND_CODE, "Order Not found");
  }

  if (order.customer.toString() !== req.user._id.toString()) {
    throw new ApiError(UNAUTHORIZED_CODE, "Unauthorized access to this order");
  }

  // response
  return res
    .status(SUCCESS_CODE)
    .json(new ApiResponse(CREATED_CODE, order, "Successfully fetched order"));
});
