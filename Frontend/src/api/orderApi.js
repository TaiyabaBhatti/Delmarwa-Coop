import axiosInstance from "./axiosInstance";

export const createOrder = async (data) => {
  return await axiosInstance.post(`/api/orders/create-order`, data);
};

export const getOrderById = async (orderId) => {
  return await axiosInstance.get(`/api/orders/${orderId}`);
};
