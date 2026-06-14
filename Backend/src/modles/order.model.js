import { mongoose, Schema } from "mongoose";
import { addressSchema } from "./address.model.js";
const orderItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const orderSchema = new Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: [orderItemSchema],
    address: addressSchema,
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
