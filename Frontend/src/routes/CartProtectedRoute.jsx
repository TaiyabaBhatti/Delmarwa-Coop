import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { Navigate } from "react-router-dom";
import { APP_ROUTES_NAME } from "../utils/appRoutesNames";
const CartProtectedRoute = ({ children }) => {
  const { cartItems } = useContext(CartContext);

  if (cartItems.length === 0) {
    return <Navigate to={APP_ROUTES_NAME.cartPage} replace />;
  }

  return children;
};

export default CartProtectedRoute;
