import React from "react";
import ButtonSubmit from "../account/ButtonSubmit";
import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { APP_ROUTES_NAME } from "../../utils/appRoutesNames";

const OrderSummary = () => {
  const { cartItems } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  useEffect(() => {
    setSubtotal((prev) => {
      return cartItems.reduce(
        (sum, currentItem) => sum + currentItem.price * currentItem.quantity,
        0
      );
    });
  }, [cartItems]);
  return (
    <section className="rounded-lg bg-white p-7 space-y-3.5">
      <h2 className="text-blue-zodiac text-lg font-bold">Order Summary</h2>
      <div className="border-y border-y-athens-gray py-2 space-y-2">
        <div className="text-blue-zodiac font-normal flex items-center justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="text-blue-zodiac font-normal flex items-center justify-between">
          <span>Shipping</span>
          <span>$15</span>
        </div>
        <div className="text-blue-zodiac font-normal flex items-center justify-between">
          <span>Tax (Est)</span>
          <span>$6.06</span>
        </div>
        <div className="text-green-gaze font-normal flex items-center justify-between">
          <span>Member Savings</span>
          <span>$78</span>
        </div>
      </div>
      <div className="font-extrabold text-lg text-blue-zodiac flex items-center justify-between">
        <span>Total</span>
        <span>$ {subtotal}</span>
      </div>
      <NavLink to={APP_ROUTES_NAME.checkoutPage}>
        <ButtonSubmit
          value={"Proceed to checkout"}
          func={null}
          properties={"uppercase!"}
        />
      </NavLink>
    </section>
  );
};

export default OrderSummary;
