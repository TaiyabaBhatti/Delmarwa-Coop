import axiosInstance from "./axiosInstance";

// this file is all about authentication

export const loginUser = async (data) => {
  return await axiosInstance.post(`/api/users/login`, data);
};

export const registerUser = async (data) => {
  return await axiosInstance.post("api/users/register", data);
};
export const logout = async () => {
  return await axiosInstance.get(`/api/users/logout`);
};

// export const refreshToken = async () => {
//   return await axiosInstance.post(`/api/users/refresh-token`);
// };

export const verifyToken = async () => {
  return await axiosInstance.get(`/api/users/verify-token`);
};
