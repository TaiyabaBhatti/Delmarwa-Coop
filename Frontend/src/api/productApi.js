import axios from "axios";

export const getSingleProduct = async (productId) => {
  return await axios.get(`/api/products/${productId}`);
};

export const getAllProducts = async () => {
  return await axios.get("/api/products/get-all-products", {});
};
