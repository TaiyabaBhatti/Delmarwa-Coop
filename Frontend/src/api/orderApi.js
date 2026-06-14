import axios from "axios";

export const createOrder = async (data) => {
  return await axios.post(`/api/orders/create-order`, data);
};

export const getOrderById = async (orderId) => {
  return await axios.get(`/api/orders/${orderId}`);
};
