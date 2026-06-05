import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../api/authApi.js";
import { CartContext } from "./cartContext.js";

const CartState = ({ children }) => {
  // data i want globally
  const [cartItems, setCartItems] = useState(null);
  const [globalMessage, setGlobalMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
