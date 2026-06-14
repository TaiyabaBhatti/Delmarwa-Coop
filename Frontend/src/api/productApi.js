import axiosInstance from "./axiosInstance";

export const getSingleProduct = async (productId) => {
  return await axiosInstance.get(`/api/products/${productId}`);
};

export const getAllProducts = async () => {
  return await axiosInstance.get("/api/products/get-all-products", {});
};
