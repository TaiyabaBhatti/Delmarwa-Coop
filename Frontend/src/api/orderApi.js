import axiosInstance from "./axiosInstance";

export const createOrder = async (data) => {
  return await axiosInstance.post(`/api/orders`, data);
};

export const getOrderById = async (orderId) => {
  return await axiosInstance.get(`/api/orders/${orderId}`);
};
