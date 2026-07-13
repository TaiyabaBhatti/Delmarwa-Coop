import axiosInstance from "./axiosInstance";

export const getSingleProduct = async (productId) => {
  return await axiosInstance.get(`/api/products/${productId}`);
};

export const getAllProducts = async (params = {}) => {
  return await axiosInstance.get("/api/products", { params });
};

export const uploadProduct = async (data) => {
  return await axiosInstance.post("/api/products", data);
};
export const updateProduct = async (data) => {
  return await axiosInstance.post("/api/products", data);
};
