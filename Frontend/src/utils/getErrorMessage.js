export const getErrorMessage = (error) => {
  if (!navigator.onLine) {
    return "No internet connection";
  }

  if (error.code === "ERR_NETWORK" || error.response?.status === 502) {
    return "Backend server unavailable";
  }

  if (error.response?.status >= 500) {
    return "Internal server error";
  }

  return error.response?.data?.message || "Something went wrong";
};
