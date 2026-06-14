import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./authContext";
import { useNavigate } from "react-router-dom";
import { verifyToken } from "../api/authApi.js";
import { CartContext } from "./cartContext.js";

const CartState = ({ children }) => {
  // data i want globally
  const { currUser } = useContext(AuthContext);
  const cartKey = `cart_${currUser?._id}`;
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const actionToCart = (prev, id, actionBy) => {
    const existingProduct = prev.find((product) => product.productId === id);
    if (!existingProduct) {
      return prev;
    }
    return prev.map((product) => {
      return product.productId === id
        ? { ...product, quantity: product.quantity + actionBy }
        : product;
    });
  };

  const addToCart = (item) => {
    setCartItems((prev) => {
      const existingProduct = prev.find(
        (product) => product.productId === item.productId
      );
      if (existingProduct) {
        if (existingProduct.quantity < existingProduct.stockCount) {
          return prev.map((product) => {
            return product.productId === item.productId
              ? { ...product, quantity: product.quantity + 1 }
              : product;
          });
        }
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  const increaseQuantity = (id) => {
    setCartItems((prev) => {
      return actionToCart(prev, id, +1);
    });
  };
  const decreaseQuantity = (id) => {
    setCartItems((prev) => {
      return actionToCart(prev, id, -1);
    });
  };

  // using filter - keeping just items that passes
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      return prev.filter((product) => product.productId !== id);
    });
  };
  useEffect(() => {
    if (!currUser?._id) return;
    const stored = localStorage.getItem(`cart_${currUser._id}`);
    if (stored) {
      const parsed = JSON.parse(stored);
      setCartItems(Array.isArray(parsed) ? parsed : []);
    } else {
      setCartItems([]);
    }
  }, [currUser]);
  useEffect(() => {
    if (!currUser?._id) return;
    localStorage.setItem(`cart_${currUser._id}`, JSON.stringify(cartItems));
  }, [cartItems, currUser]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        setCartItems,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;
